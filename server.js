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

app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Root route so Vercel / Serverless always serves index.html without "Cannot GET /"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
  res.type('text/css').sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/app.js', (req, res) => {
  res.type('application/javascript').sendFile(path.join(__dirname, 'app.js'));
});

try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
} catch (e) {
  // Read-only filesystem in serverless environments
}

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

// 64 Argentine Alfajores Catalog (Sin imágenes)
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

// Progression for 64 tournament (starting at 32avos)
function getNextSlotId(slotId) {
  if (slotId === 'FINAL_L' || slotId === 'FINAL_R') return 'CHAMPION';

  const parts = slotId.split('_'); // ['L', 'R0', 'M0', 'A']
  if (parts.length < 4) return null;

  const side = parts[0]; // 'L' or 'R'
  const roundIdx = parseInt(parts[1].replace('R', ''), 10);
  const matchIdx = parseInt(parts[2].replace('M', ''), 10);

  // In 64: R0 (32avos), R1 (16avos), R2 (Octavos), R3 (Cuartos), R4 (Semis)
  if (roundIdx === 4) {
    return side === 'L' ? 'FINAL_L' : 'FINAL_R';
  }

  const nextMatch = Math.floor(matchIdx / 2);
  const nextLetter = (matchIdx % 2 === 0) ? 'A' : 'B';
  return `${side}_R${roundIdx + 1}_M${nextMatch}_${nextLetter}`;
}

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
      
      let alfajores = [...DEFAULT_ALFAJORES_64];
      if (Array.isArray(data.alfajores) && data.alfajores.length >= 32) {
        const customOnes = data.alfajores.filter(a => a.id.startsWith('custom-'));
        alfajores = [...DEFAULT_ALFAJORES_64, ...customOnes];
      }

      return {
        size: 64,
        alfajores,
        bracketState: data.bracketState || {},
        activeMatch: data.activeMatch || null,
        votes: data.votes || {},
        updatedAt: new Date().toISOString()
      };
    } catch (e) {
      console.error('Error reading state file, starting fresh', e);
    }
  }

  // Fresh initial 64 state
  const state = {
    size: 64,
    alfajores: [...DEFAULT_ALFAJORES_64],
    bracketState: {},
    activeMatch: null,
    votes: {},
    updatedAt: new Date().toISOString()
  };
  saveState(state);
  return state;
}

let tournamentState = loadState();

function saveState(state = tournamentState) {
  try {
    state.updatedAt = new Date().toISOString();
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving tournament state:', err);
  }
}

function broadcastState() {
  const payload = JSON.stringify({
    type: 'STATE_UPDATE',
    state: tournamentState,
    connectedCount: wss.clients.size,
    network: {
      ip: localIP,
      port: PORT,
      url: localUrl,
      qr: qrCodeDataUrl
    }
  });

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

wss.on('connection', ws => {
  ws.send(JSON.stringify({
    type: 'INIT_STATE',
    state: tournamentState,
    connectedCount: wss.clients.size,
    network: {
      ip: localIP,
      port: PORT,
      url: localUrl,
      qr: qrCodeDataUrl
    }
  }));

  broadcastState();

  ws.on('close', () => broadcastState());
});

// REST API Endpoints

app.get('/api/state', (req, res) => {
  res.json({
    state: tournamentState,
    connectedCount: wss.clients.size,
    network: {
      ip: localIP,
      port: PORT,
      url: localUrl,
      qr: qrCodeDataUrl
    }
  });
});

// 1. Select Active Match for Today's Duel
app.post('/api/active-match', (req, res) => {
  const { matchKey, slotA, slotB, label } = req.body;
  if (!matchKey) {
    tournamentState.activeMatch = null;
  } else {
    tournamentState.activeMatch = { matchKey, slotA, slotB, label };
    if (!tournamentState.votes[matchKey]) {
      tournamentState.votes[matchKey] = {};
    }
  }
  saveState();
  broadcastState();
  res.json({ success: true, activeMatch: tournamentState.activeMatch });
});

// 2. Submit a Vote for an Alfajor in the Active Match
app.post('/api/vote', (req, res) => {
  const { matchKey, slotChosen, voterId } = req.body;
  if (!matchKey || !slotChosen || !voterId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  if (!tournamentState.votes[matchKey]) {
    tournamentState.votes[matchKey] = {};
  }
  const matchVotes = tournamentState.votes[matchKey];

  // Remove previous vote in this match from this voter
  Object.keys(matchVotes).forEach(slot => {
    if (Array.isArray(matchVotes[slot])) {
      matchVotes[slot] = matchVotes[slot].filter(id => id !== voterId);
    }
  });

  if (!matchVotes[slotChosen]) matchVotes[slotChosen] = [];
  matchVotes[slotChosen].push(voterId);

  saveState();
  broadcastState();
  res.json({ success: true, votes: tournamentState.votes[matchKey] });
});

// 3. Finish Match and Automatically Advance Winner
app.post('/api/finish-match', (req, res) => {
  const { matchKey, winnerSlot } = req.body;
  const current = tournamentState.bracketState[winnerSlot];

  if (!current) {
    return res.status(400).json({ error: 'Winner slot has no alfajor' });
  }

  const nextSlot = getNextSlotId(winnerSlot);
  if (nextSlot) {
    tournamentState.bracketState[nextSlot] = current;
  }

  // Clear active match
  tournamentState.activeMatch = null;

  saveState();
  broadcastState();
  res.json({ success: true, winner: current, nextSlot, bracketState: tournamentState.bracketState });
});

// 4. Update Single Slot
app.post('/api/bracket/slot', (req, res) => {
  const { slotId, alfajor } = req.body;
  if (!slotId) return res.status(400).json({ error: 'slotId required' });

  if (alfajor) {
    tournamentState.bracketState[slotId] = alfajor;
  } else {
    delete tournamentState.bracketState[slotId];
  }

  saveState();
  broadcastState();
  res.json({ success: true, bracketState: tournamentState.bracketState });
});

// 5. Advance 1 Slot Directly with 1 click
app.post('/api/bracket/advance', (req, res) => {
  const { slotId } = req.body;
  const current = tournamentState.bracketState[slotId];
  if (!current) return res.status(400).json({ error: 'No alfajor in source slot' });

  const nextSlot = getNextSlotId(slotId);
  if (!nextSlot) return res.status(400).json({ error: 'No next slot' });

  tournamentState.bracketState[nextSlot] = current;

  saveState();
  broadcastState();
  res.json({ success: true, nextSlot, alfajor: current });
});

// 6. Fill Initial 64 Slots with Catalog
app.post('/api/bracket/fill-all', (req, res) => {
  const initialSlots = [];
  for (let m = 0; m < 16; m++) {
    initialSlots.push(`L_R0_M${m}_A`);
    initialSlots.push(`L_R0_M${m}_B`);
  }
  for (let m = 0; m < 16; m++) {
    initialSlots.push(`R_R0_M${m}_A`);
    initialSlots.push(`R_R0_M${m}_B`);
  }

  const usedIds = new Set(Object.values(tournamentState.bracketState).map(a => a?.id).filter(Boolean));
  const available = tournamentState.alfajores.filter(a => !usedIds.has(a.id));

  let availIdx = 0;
  initialSlots.forEach(slotId => {
    if (!tournamentState.bracketState[slotId] && available[availIdx]) {
      tournamentState.bracketState[slotId] = available[availIdx];
      availIdx++;
    }
  });

  saveState();
  broadcastState();
  res.json({ success: true, bracketState: tournamentState.bracketState });
});

// 7. Clear Bracket
app.post('/api/bracket/reset', (req, res) => {
  tournamentState.bracketState = {};
  tournamentState.activeMatch = null;
  tournamentState.votes = {};
  saveState();
  broadcastState();
  res.json({ success: true });
});

// 8. Add custom alfajor
app.post('/api/alfajor/add', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newAlf = {
    id: 'custom-' + Date.now(),
    name: name.toUpperCase().trim(),
    desc: 'Alfajor personalizado de la oficina',
    cat: 'pedidos',
    badge: 'Custom',
    code: name.substring(0, 3).toUpperCase()
  };

  tournamentState.alfajores.unshift(newAlf);
  saveState();
  broadcastState();
  res.json({ success: true, alfajor: newAlf });
});

// 9. Delete custom alfajor
app.post('/api/alfajor/delete', (req, res) => {
  const { id } = req.body;
  tournamentState.alfajores = tournamentState.alfajores.filter(a => a.id !== id);
  Object.keys(tournamentState.bracketState).forEach(slotId => {
    if (tournamentState.bracketState[slotId]?.id === id) {
      delete tournamentState.bracketState[slotId];
    }
  });
  saveState();
  broadcastState();
  res.json({ success: true });
});

if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log('\n=============================================================');
    console.log('   🏆 MUNDIAL DE ALFAJORES (64 - 32AVOS) - SERVIDOR 🏆');
    console.log('=============================================================');
    console.log(` • Servidor local (esta PC):     http://localhost:${PORT}`);
    console.log(` • Servidor para celulares (LAN): http://${localIP}:${PORT}`);
    console.log(' • Memoria persistente guardada en data/mundial_state.json');
    console.log(' • Sincronización en tiempo real por WebSockets activa');
    console.log('=============================================================\n');
  });
}

module.exports = app;
