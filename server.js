const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const QRCode = require('qrcode');
const os = require('os');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const STATE_FILE = path.join(DATA_DIR, 'mundial_state.json');

// Persistent Cloud Database (Upstash Redis / Vercel KV)
// If Vercel KV is connected, it uses process.env.KV_REST_API_URL.
// Otherwise, it uses our pre-provisioned persistent Upstash Redis database.
const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || 'https://golden-cub-247635.upstash.io';
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || 'gQAAAAAAA8dTAQIgcDIxNDQ5MzJiMGU2N2I0ZjhjYjFmYTU0ZDllODZkNTYyNQ';
const REDIS_KEY = 'mundial_state';

app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ensure root and assets always resolve cleanly on Vercel serverless
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
  res.type('text/css').sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/app.js', (req, res) => {
  res.type('application/javascript').sendFile(path.join(__dirname, 'app.js'));
});

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  const candidates = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        if (iface.address.startsWith('192.168.') || iface.address.startsWith('10.') || iface.address.startsWith('172.')) {
          return iface.address;
        }
        candidates.push(iface.address);
      }
    }
  }
  return candidates[0] || 'localhost';
}

const localIP = getLocalIP();
const localUrl = `http://${localIP}:${PORT}`;
let qrCodeDataUrl = '';

QRCode.toDataURL(localUrl, { margin: 2, scale: 7, color: { dark: '#000000', light: '#ffffff' } })
  .then(url => { qrCodeDataUrl = url; })
  .catch(err => console.error('Error generating QR code:', err));

// 64 Argentine Alfajores Catalog
const DEFAULT_ALFAJORES_64 = [
  { id: "terrabusi-blanco", name: "TERRABUSI BLANCO", desc: "Bañado en repostería blanca clásica", cat: "kiosco", badge: "Blanco", code: "TB" },
  { id: "milka-oreo", name: "MILKA OREO", desc: "Galletita Oreo y crema Milka suave", cat: "kiosco", badge: "Oreo", code: "MO" },
  { id: "terrabusi-glaseado-blanco", name: "TERRABUSI GLASEADO BLANCO", desc: "El clásico escolar con baño glasé de azúcar", cat: "kiosco", badge: "Glasé", code: "TG" },
  { id: "milka-mousse-blanco", name: "MILKA MOUSSE BLANCO", desc: "Relleno de mousse y cobertura blanca", cat: "kiosco", badge: "Mousse B", code: "MMB" },
  { id: "milka-mousse-negro", name: "MILKA MOUSSE NEGRO", desc: "Relleno de mousse y chocolate con leche", cat: "kiosco", badge: "Mousse N", code: "MMN" },
  { id: "block", name: "BLOCK", desc: "Cofler Block con maní y puro chocolate", cat: "kiosco", badge: "Cofler", code: "BLK" },
  { id: "bonobon", name: "BONOBON", desc: "Relleno de crema de maní y oblea crujiente", cat: "kiosco", badge: "Bon o Bon", code: "BOB" },
  { id: "pepito", name: "PEPITO", desc: "Galleta con chispas de chocolate y dulce de leche", cat: "kiosco", badge: "Chips", code: "PEP" },
  { id: "chocotorta", name: "CHOCOTORTA", desc: "Sabor original con galletitas Chocolinas", cat: "kiosco", badge: "Torta", code: "CHO" },
  { id: "cachafaz-n", name: "CACHAFAZ NEGRO", desc: "Cachafaz Negro bañado en chocolate amargo", cat: "premium", badge: "Negro", code: "CN" },
  { id: "cachafaz-b", name: "CACHAFAZ BLANCO", desc: "Cachafaz Blanco con baño suave de repostería", cat: "premium", badge: "Blanco", code: "CB" },
  { id: "shot-b", name: "SHOT BLANCO", desc: "Shot Blanco con maní crocante y chocolate blanco", cat: "kiosco", badge: "Blanco", code: "SHB" },
  { id: "shot-n", name: "SHOT NEGRO", desc: "Chocolate con leche y trozos de maní crocante", cat: "kiosco", badge: "Maní", code: "SHN" },
  { id: "gula", name: "GULA", desc: "Mega alfajor artesanal relleno extra contundente", cat: "artesanal", badge: "Gula", code: "GUL" },
  { id: "capitan-del-espacio", name: "CAPITÁN DEL ESPACIO NEGRO", desc: "El mito absoluto del conurbano quilmeño", cat: "mítico", badge: "Mítico", code: "CAP" },
  { id: "capitan-blanco", name: "CAPITÁN DEL ESPACIO BLANCO", desc: "La mítica versión con baño blanco", cat: "mítico", badge: "Blanco", code: "CPB" },
  { id: "guaymallen-choco", name: "GUAYMALLÉN CHOCOLATE", desc: "El rey popular y de los recreos", cat: "kiosco", badge: "Clásico", code: "GUY" },
  { id: "guaymallen-blanco", name: "GUAYMALLÉN BLANCO", desc: "El clásico de vainilla con glasé", cat: "kiosco", badge: "Blanco", code: "GUB" },
  { id: "guaymallen-oro", name: "GUAYMALLÉN ORO", desc: "Triple premium de masa suave y dulce selecto", cat: "kiosco", badge: "Oro", code: "ORO" },
  { id: "guaymallen-fruta", name: "GUAYMALLÉN MEMBRILLO", desc: "Relleno tradicional de membrillo", cat: "kiosco", badge: "Fruta", code: "GUM" },
  { id: "havanna-clasico", name: "HAVANNA CLÁSICO", desc: "El ícono marplatense por excelencia", cat: "costa", badge: "Costa", code: "HAV" },
  { id: "havanna-sal-marina", name: "HAVANNA MAR DEL PLATA", desc: "Edición 150 años con sal marina", cat: "costa", badge: "Furor", code: "HSM" },
  { id: "havanna-70", name: "HAVANNA 70% CACAO", desc: "Puro chocolate amargo 70%", cat: "costa", badge: "70%", code: "H70" },
  { id: "havanna-nuez", name: "HAVANNA NUEZ", desc: "Masa especial con trozos de nuez", cat: "costa", badge: "Nuez", code: "HNU" },
  { id: "jorgito-negro", name: "JORGITO CHOCOLATE", desc: "El gran clásico de chocolate barrial", cat: "kiosco", badge: "Clásico", code: "JOR" },
  { id: "jorgito-blanco", name: "JORGITO BLANCO", desc: "Bañado en azúcar glasé suave", cat: "kiosco", badge: "Blanco", code: "JOB" },
  { id: "jorgito-mousse", name: "JORGITO MOUSSE", desc: "Relleno de mousse de chocolate", cat: "kiosco", badge: "Mousse", code: "JMO" },
  { id: "jorgelin-triple", name: "JORGELÍN TRIPLE", desc: "La versión gigante del clásico Jorgito", cat: "kiosco", badge: "Triple", code: "JGT" },
  { id: "cachafaz-maicena", name: "CACHAFAZ MAICENA", desc: "El referente de maicena con coco", cat: "premium", badge: "Maicena", code: "CMA" },
  { id: "cachafaz-mousse", name: "CACHAFAZ MOUSSE", desc: "Chocolate belga y relleno aireado", cat: "premium", badge: "Mousse", code: "CMU" },
  { id: "fantoche-triple", name: "FANTOCHE TRIPLE NEGRO", desc: "El pionero creador del alfajor triple", cat: "kiosco", badge: "Pionero", code: "FAN" },
  { id: "fantoche-blanco", name: "FANTOCHE BLANCO (DAY)", desc: "Triple blanco clásico", cat: "kiosco", badge: "Triple", code: "FNB" },
  { id: "fantoche-cuadruple", name: "FANTOCHE CUÁDRUPLE", desc: "Cuatro capas de masa y dulce de leche", cat: "kiosco", badge: "Cuádruple", code: "FCU" },
  { id: "rasta-negro", name: "RASTA NEGRO", desc: "Galleta crujiente y abundante dulce de leche", cat: "kiosco", badge: "Furor", code: "RAS" },
  { id: "rasta-blanco", name: "RASTA BLANCO", desc: "Versión chocolate blanco extra crocante", cat: "kiosco", badge: "Blanco", code: "RAB" },
  { id: "balcarce-choco", name: "BALCARCE CHOCOLATE", desc: "Hojaldre, merengue y sabor serrano", cat: "costa", badge: "Tradición", code: "BAL" },
  { id: "balcarce-merengue", name: "BALCARCE MERENGUE", desc: "Baño crocante de merengue italiano", cat: "costa", badge: "Merengue", code: "BME" },
  { id: "balcarce-nuez", name: "BALCARCE NUEZ", desc: "Relleno selecto con nueces enteras", cat: "costa", badge: "Nuez", code: "BNU" },
  { id: "fulbito", name: "FULBITO MANÍ", desc: "Pura nostalgia escolar de los 90s", cat: "kiosco", badge: "Nostalgia", code: "FUL" },
  { id: "tatin-simple", name: "TATÍN SIMPLE", desc: "El clásico de quiosco a precio popular", cat: "kiosco", badge: "Retro", code: "TAT" },
  { id: "tatin-triple", name: "TATÍN TRIPLE", desc: "Tres tapas con baño de repostería", cat: "kiosco", badge: "Triple", code: "TTR" },
  { id: "grandote-triple", name: "GRANDOTE TRIPLE", desc: "Doble piso y máxima contundencia popular", cat: "kiosco", badge: "Triple", code: "GRA" },
  { id: "tofi-negro", name: "TOFI NEGRO", desc: "El alfajor suave de dulce de leche Arcor", cat: "kiosco", badge: "Tofi", code: "TOF" },
  { id: "tofi-blanco", name: "TOFI BLANCO", desc: "Cobertura blanca cremosa de Arcor", cat: "kiosco", badge: "Blanco", code: "TOB" },
  { id: "vauquita", name: "VAUQUITA", desc: "Relleno del auténtico dulce de leche de campo", cat: "kiosco", badge: "Vauquita", code: "VAU" },
  { id: "aguila-clasico", name: "ÁGUILA CLÁSICO", desc: "Puro chocolate Águila semiamargo", cat: "premium", badge: "Águila", code: "AGU" },
  { id: "aguila-mini-torta-coco", name: "ÁGUILA MINI TORTA COCO", desc: "Torta alfajor con dulce de leche y coco", cat: "premium", badge: "Torta", code: "ATC" },
  { id: "aguila-brownie", name: "ÁGUILA BROWNIE", desc: "Masa húmeda tipo brownie y chocolate", cat: "premium", badge: "Brownie", code: "ABR" },
  { id: "suchard", name: "SUCHARD CHOCOLATE", desc: "El mítico mousse de los años 80 reeditado", cat: "kiosco", badge: "Mítico", code: "SUC" },
  { id: "la-aldea-negro", name: "LA ALDEA CHOCOLATE NEGRO", desc: "Alfajor marplatense extra relleno", cat: "costa", badge: "Aldea", code: "ALD" },
  { id: "la-aldea-ddl", name: "LA ALDEA DDL EXTREMO", desc: "70% de dulce de leche en peso", cat: "costa", badge: "Extremo", code: "ADL" },
  { id: "entre-dos-whisky", name: "ENTRE DOS WHISKY", desc: "Mendoza: dulce de leche con toque de whisky", cat: "regional", badge: "Mendoza", code: "EDW" },
  { id: "entre-dos-ron", name: "ENTRE DOS RON", desc: "Mendoza: chocolate negro y ron dulce", cat: "regional", badge: "Mendoza", code: "EDR" },
  { id: "cerro-azul", name: "CERRO AZUL", desc: "Campeón del Mundial del Alfajor", cat: "artesanal", badge: "Campeón", code: "CAZ" },
  { id: "nazareno", name: "NAZARENO CÓRDOBA", desc: "Tradicional alfajor cordobés hojaldrado", cat: "regional", badge: "Córdoba", code: "NAZ" },
  { id: "la-quinta", name: "LA QUINTA", desc: "Carlos Paz: clásico cordobés de fruta", cat: "regional", badge: "Córdoba", code: "LQU" },
  { id: "chammas", name: "CHAMMAS CÓRDOBA", desc: "El más antiguo de Argentina desde 1869", cat: "regional", badge: "1869", code: "CHA" },
  { id: "estancia-rosario", name: "ESTANCIA EL ROSARIO", desc: "La Cumbre, Córdoba: receta serrana", cat: "regional", badge: "Serrano", code: "EER" },
  { id: "marley", name: "MARLEY BAJONERO", desc: "Galleta artesanal con relleno súper generoso", cat: "artesanal", badge: "Bajón", code: "MAR" },
  { id: "milka-triple-ddl", name: "MILKA TRIPLE DDL", desc: "Triple chocolate Milka y dulce de leche", cat: "kiosco", badge: "Triple", code: "MTD" },
  { id: "oreo-triple", name: "OREO TRIPLE", desc: "Galletitas Oreo triples con dulce de leche", cat: "kiosco", badge: "Oreo", code: "OTR" },
  { id: "cofler-extra", name: "COFLER EXTRA CHOCOLATE", desc: "Puro baño de repostería Cofler Arcor", cat: "kiosco", badge: "Cofler", code: "COF" },
  { id: "terrabusi-triple", name: "TERRABUSI TRIPLE", desc: "El clásico kiosquero de triple capa", cat: "kiosco", badge: "Triple", code: "TTB" },
  { id: "guolis", name: "GUOLIS CORAZÓN DDL", desc: "Mar del Plata: centro fluido de dulce de leche", cat: "costa", badge: "Guolis", code: "GUO" }
];

function getFreshDefaultState() {
  return {
    size: 64,
    alfajores: [...DEFAULT_ALFAJORES_64],
    bracketState: {},
    activeMatch: null,
    votes: {},
    updatedAt: new Date().toISOString()
  };
}

function getNextSlotId(slotId, size = 64) {
  if (slotId === 'FINAL_L' || slotId === 'FINAL_R') return 'CHAMPION';

  const parts = slotId.split('_'); // ['L', 'R0', 'M0', 'A']
  if (parts.length < 4) return null;

  const side = parts[0]; // 'L' or 'R'
  const roundIdx = parseInt(parts[1].replace('R', ''), 10);
  const matchIdx = parseInt(parts[2].replace('M', ''), 10);

  // In 64: maxRound is 4 (Semis). In 32: maxRound is 3 (Semis).
  const maxRound = (size === 32) ? 3 : 4;
  if (roundIdx === maxRound) {
    return side === 'L' ? 'FINAL_L' : 'FINAL_R';
  }

  const nextMatch = Math.floor(matchIdx / 2);
  const nextLetter = (matchIdx % 2 === 0) ? 'A' : 'B';
  return `${side}_R${roundIdx + 1}_M${nextMatch}_${nextLetter}`;
}

// Local Fallback Helpers
function loadLocalState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
      let alfajores = [...DEFAULT_ALFAJORES_64];
      if (Array.isArray(data.alfajores) && data.alfajores.length >= 32) {
        const customOnes = data.alfajores.filter(a => a.id.startsWith('custom-'));
        alfajores = [...DEFAULT_ALFAJORES_64, ...customOnes];
      }
      return {
        size: data.size || 64,
        alfajores,
        bracketState: data.bracketState || {},
        activeMatch: data.activeMatch || null,
        votes: data.votes || {},
        updatedAt: data.updatedAt || new Date().toISOString()
      };
    }
  } catch (e) {
    console.error('Error reading local state file:', e.message);
  }
  return getFreshDefaultState();
}

function saveLocalState(state) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (e) {
    // Read-only filesystem in serverless environments is normal
  }
}

// Cloud Persistence Layer (Upstash Redis)
async function fetchCloudState() {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const res = await fetch(`${UPSTASH_URL}/get/${REDIS_KEY}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
        cache: 'no-store'
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.result) {
          const parsed = typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
          if (parsed && typeof parsed === 'object') {
            if (!parsed.alfajores || parsed.alfajores.length < 32) {
              parsed.alfajores = [...DEFAULT_ALFAJORES_64];
            }
            return parsed;
          }
        }
      }
    } catch (err) {
      console.error('Cloud storage read error:', err.message);
    }
  }
  return loadLocalState();
}

async function persistCloudState(state) {
  state.updatedAt = new Date().toISOString();
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      await fetch(`${UPSTASH_URL}/set/${REDIS_KEY}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${UPSTASH_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      });
    } catch (err) {
      console.error('Cloud storage write error:', err.message);
    }
  }
  saveLocalState(state);
  return state;
}

// Memory cache with 1-second TTL to keep requests snappy
let cachedState = null;
let lastCacheFetch = 0;
const CACHE_TTL_MS = 1200;

async function getSharedState(forceFresh = false) {
  const now = Date.now();
  if (!forceFresh && cachedState && (now - lastCacheFetch < CACHE_TTL_MS)) {
    return cachedState;
  }
  const state = await fetchCloudState();
  cachedState = state;
  lastCacheFetch = now;
  return state;
}

async function mutateSharedState(mutator) {
  // Always fetch fresh state before mutating to avoid stale overwrites
  let state = await fetchCloudState();
  if (!state || !Array.isArray(state.alfajores)) {
    state = getFreshDefaultState();
  }
  const result = await mutator(state);
  await persistCloudState(state);
  cachedState = state;
  lastCacheFetch = Date.now();
  broadcastState(state);
  return { state, result };
}

function broadcastState(state = cachedState) {
  if (!state) return;
  const payload = JSON.stringify({
    type: 'STATE_UPDATE',
    state,
    connectedCount: wss.clients.size,
    network: { ip: localIP, port: PORT, url: localUrl, qr: qrCodeDataUrl }
  });

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

wss.on('connection', async ws => {
  const state = await getSharedState();
  ws.send(JSON.stringify({
    type: 'INIT_STATE',
    state,
    connectedCount: wss.clients.size,
    network: { ip: localIP, port: PORT, url: localUrl, qr: qrCodeDataUrl }
  }));
  broadcastState(state);
  ws.on('close', () => broadcastState());
});

// ==========================================
// REST API ENDPOINTS (Synchronous & Cloud)
// ==========================================

// Get Current Shared State
app.get('/api/state', async (req, res) => {
  try {
    const state = await getSharedState();
    res.json({
      state,
      connectedCount: wss.clients.size,
      network: { ip: localIP, port: PORT, url: localUrl, qr: qrCodeDataUrl }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 1. Toggle Tournament Size (32 vs 64)
app.post('/api/tournament/size', async (req, res) => {
  const { size } = req.body;
  if (size !== 32 && size !== 64) return res.status(400).json({ error: 'Size must be 32 or 64' });

  const { state } = await mutateSharedState(s => {
    s.size = size;
  });
  res.json({ success: true, state });
});

// 2. Select Active Match for Today's Duel
app.post('/api/active-match', async (req, res) => {
  const { matchKey, slotA, slotB, label } = req.body;
  const { state } = await mutateSharedState(s => {
    if (!matchKey) {
      s.activeMatch = null;
    } else {
      s.activeMatch = { matchKey, slotA, slotB, label };
      if (!s.votes[matchKey]) {
        s.votes[matchKey] = {};
      }
    }
  });
  res.json({ success: true, state, activeMatch: state.activeMatch });
});

// 3. Submit a Vote for an Alfajor in the Active Match
app.post('/api/vote', async (req, res) => {
  const { matchKey, slotChosen, voterId } = req.body;
  if (!matchKey || !slotChosen || !voterId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const { state } = await mutateSharedState(s => {
    if (!s.votes[matchKey]) s.votes[matchKey] = {};
    const matchVotes = s.votes[matchKey];

    // Remove previous vote in this match from this voter
    Object.keys(matchVotes).forEach(slot => {
      if (Array.isArray(matchVotes[slot])) {
        matchVotes[slot] = matchVotes[slot].filter(id => id !== voterId);
      }
    });

    if (!matchVotes[slotChosen]) matchVotes[slotChosen] = [];
    matchVotes[slotChosen].push(voterId);
  });

  res.json({ success: true, state, votes: state.votes[matchKey] });
});

// 4. Finish Match and Automatically Advance Winner
app.post('/api/finish-match', async (req, res) => {
  const { matchKey, winnerSlot } = req.body;

  let currentWinner = null;
  let targetSlot = null;

  const { state } = await mutateSharedState(s => {
    currentWinner = s.bracketState[winnerSlot];
    if (currentWinner) {
      targetSlot = getNextSlotId(winnerSlot, s.size);
      if (targetSlot) {
        s.bracketState[targetSlot] = currentWinner;
      }
    }
    s.activeMatch = null;
  });

  if (!currentWinner) {
    return res.status(400).json({ error: 'Winner slot has no alfajor' });
  }

  res.json({ success: true, state, winner: currentWinner, nextSlot: targetSlot, bracketState: state.bracketState });
});

// 5. Update Single Slot
app.post('/api/bracket/slot', async (req, res) => {
  const { slotId, alfajor } = req.body;
  if (!slotId) return res.status(400).json({ error: 'slotId required' });

  const { state } = await mutateSharedState(s => {
    if (alfajor) {
      s.bracketState[slotId] = alfajor;
    } else {
      delete s.bracketState[slotId];
    }
  });

  res.json({ success: true, state, bracketState: state.bracketState });
});

// 6. Advance 1 Slot Directly with 1 click
app.post('/api/bracket/advance', async (req, res) => {
  const { slotId } = req.body;

  let movedAlfajor = null;
  let targetSlot = null;

  const { state } = await mutateSharedState(s => {
    movedAlfajor = s.bracketState[slotId];
    if (movedAlfajor) {
      targetSlot = getNextSlotId(slotId, s.size);
      if (targetSlot) {
        s.bracketState[targetSlot] = movedAlfajor;
      }
    }
  });

  if (!movedAlfajor) return res.status(400).json({ error: 'No alfajor in source slot' });
  if (!targetSlot) return res.status(400).json({ error: 'No next slot available' });

  res.json({ success: true, state, nextSlot: targetSlot, alfajor: movedAlfajor });
});

// 7. Fill Initial Slots with Catalog
app.post('/api/bracket/fill-all', async (req, res) => {
  const reqSize = req.body.size;

  const { state } = await mutateSharedState(s => {
    const activeSize = (reqSize === 32 || reqSize === 64) ? reqSize : (s.size || 64);
    s.size = activeSize;

    const matchesPerSide = (activeSize === 32) ? 8 : 16;
    const initialSlots = [];

    for (let m = 0; m < matchesPerSide; m++) {
      initialSlots.push(`L_R0_M${m}_A`);
      initialSlots.push(`L_R0_M${m}_B`);
    }
    for (let m = 0; m < matchesPerSide; m++) {
      initialSlots.push(`R_R0_M${m}_A`);
      initialSlots.push(`R_R0_M${m}_B`);
    }

    const usedIds = new Set(Object.values(s.bracketState).map(a => a?.id).filter(Boolean));
    const available = s.alfajores.filter(a => !usedIds.has(a.id));

    let availIdx = 0;
    initialSlots.forEach(slotId => {
      if (!s.bracketState[slotId] && available[availIdx]) {
        s.bracketState[slotId] = available[availIdx];
        availIdx++;
      }
    });
  });

  res.json({ success: true, state, bracketState: state.bracketState });
});

// 8. Clear Bracket
app.post('/api/bracket/reset', async (req, res) => {
  const { state } = await mutateSharedState(s => {
    s.bracketState = {};
    s.activeMatch = null;
    s.votes = {};
  });
  res.json({ success: true, state });
});

// 9. Add custom alfajor
app.post('/api/alfajor/add', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  let newAlf = null;
  const { state } = await mutateSharedState(s => {
    newAlf = {
      id: 'custom-' + Date.now(),
      name: name.toUpperCase().trim(),
      desc: 'Alfajor personalizado de la oficina',
      cat: 'pedidos',
      badge: 'Custom',
      code: name.substring(0, 3).toUpperCase()
    };
    s.alfajores.unshift(newAlf);
  });

  res.json({ success: true, state, alfajor: newAlf });
});

// 10. Delete custom alfajor
app.post('/api/alfajor/delete', async (req, res) => {
  const { id } = req.body;
  const { state } = await mutateSharedState(s => {
    s.alfajores = s.alfajores.filter(a => a.id !== id);
    Object.keys(s.bracketState).forEach(slotId => {
      if (s.bracketState[slotId]?.id === id) {
        delete s.bracketState[slotId];
      }
    });
  });
  res.json({ success: true, state });
});

if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log('\n=============================================================');
    console.log('   🏆 MUNDIAL DE ALFAJORES - SERVIDOR CON NUBE ACTIVA 🏆');
    console.log('=============================================================');
    console.log(` • Servidor local (esta PC):     http://localhost:${PORT}`);
    console.log(` • Servidor para celulares (LAN): http://${localIP}:${PORT}`);
    console.log(' • Base de datos en la nube:      Upstash Redis / Vercel KV');
    console.log(' • Sincronización en tiempo real activa para todos los usuarios');
    console.log('=============================================================\n');
  });
}

module.exports = app;
