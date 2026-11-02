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

// 32 Argentine Alfajores with verified local packshots
const DEFAULT_ALFAJORES_32 = [
  { id: "terrabusi-blanco", name: "TERRABUSI BLANCO", desc: "Bañado en repostería blanca clásica", cat: "pedidos", badge: "Blanco", code: "TB", img: "images/terrabusi-blanco.webp" },
  { id: "milka-oreo", name: "MILKA OREO", desc: "Galletita Oreo y crema Milka suave", cat: "pedidos", badge: "Oreo", code: "MO", img: "images/milka-oreo.webp" },
  { id: "terrabusi-glaseado-blanco", name: "TERRABUSI GLASEADO BLANCO", desc: "El clásico escolar con baño glasé de azúcar", cat: "pedidos", badge: "Glasé", code: "TG", img: "images/terrabusi-glaseado-blanco.webp" },
  { id: "milka-mousse-blanco", name: "MILKA MOUSSE BLANCO", desc: "Relleno de mousse y cobertura blanca", cat: "pedidos", badge: "Mousse B", code: "MMB", img: "images/milka-mousse-blanco.webp" },
  { id: "milka-mousse-negro", name: "MILKA MOUSSE NEGRO", desc: "Relleno de mousse y chocolate con leche", cat: "pedidos", badge: "Mousse N", code: "MMN", img: "images/milka-mousse-negro.webp" },
  { id: "block", name: "BLOCK", desc: "Cofler Block con maní y puro chocolate", cat: "pedidos", badge: "Cofler", code: "BLK", img: "images/block.webp" },
  { id: "bonobon", name: "BONOBON", desc: "Relleno de crema de maní y oblea crujiente", cat: "pedidos", badge: "Bon o Bon", code: "BOB", img: "images/bonobon.webp" },
  { id: "pepito", name: "PEPITO", desc: "Galleta con chispas de chocolate y dulce de leche", cat: "pedidos", badge: "Chips", code: "PEP", img: "images/pepito.webp" },
  { id: "chocotorta", name: "CHOCOTORTA", desc: "Sabor original con galletitas Chocolinas", cat: "pedidos", badge: "Torta", code: "CHO", img: "images/chocotorta.webp" },
  { id: "cachafaz-n", name: "CACHAFAZ N", desc: "Cachafaz Negro bañado en chocolate amargo", cat: "pedidos", badge: "Negro", code: "CN", img: "images/cachafaz-n.webp" },
  { id: "cachafaz-b", name: "CACHAFAZ B", desc: "Cachafaz Blanco con baño suave de repostería", cat: "pedidos", badge: "Blanco", code: "CB", img: "images/cachafaz-b.webp" },
  { id: "shot-b", name: "SHOT B", desc: "Shot Blanco con maní crocante y chocolate blanco", cat: "pedidos", badge: "Blanco", code: "SHB", img: "images/shot-b.png" },
  { id: "gula", name: "GULA", desc: "Mega alfajor artesanal relleno extra contundente", cat: "pedidos", badge: "Gula", code: "GUL", img: "images/gula.webp" },
  { id: "capitan-del-espacio", name: "CAPITAN DEL ESPACIO", desc: "El mito absoluto del conurbano quilmeño", cat: "pedidos", badge: "Mítico", code: "CAP", img: "images/capitan-del-espacio.webp" },
  { id: "guaymallen", name: "GUAYMALLÉN CHOCOLATE", desc: "El rey popular y de los recreos", cat: "kiosco", badge: "Clásico", code: "GUY", img: "images/guaymallen.webp" },
  { id: "havanna-clasico", name: "HAVANNA CLÁSICO", desc: "El ícono marplatense por excelencia", cat: "costa", badge: "Costa", code: "HAV", img: "images/havanna-clasico.webp" },
  { id: "havanna-sal-marina", name: "HAVANNA MAR DEL PLATA", desc: "Edición 150 años con sal marina", cat: "costa", badge: "Furor", code: "HSM", img: "images/havanna-sal-marina.webp" },
  { id: "jorgito-negro", name: "JORGITO CHOCOLATE", desc: "El gran clásico de chocolate barrial", cat: "kiosco", badge: "Clásico", code: "JOR", img: "images/jorgito-negro.webp" },
  { id: "cachafaz-maicena", name: "CACHAFAZ MAICENA", desc: "El referente de maicena con coco", cat: "kiosco", badge: "Maicena", code: "CMA", img: "images/cachafaz-maicena.webp" },
  { id: "fantoche-triple", name: "FANTOCHE TRIPLE", desc: "El pionero creador del alfajor triple", cat: "kiosco", badge: "Pionero", code: "FAN", img: "images/fantoche-triple.webp" },
  { id: "rasta", name: "RASTA", desc: "Galleta crujiente y abundante dulce de leche", cat: "kiosco", badge: "Furor", code: "RAS", img: "images/rasta.webp" },
  { id: "balcarce", name: "BALCARCE", desc: "Hojaldre, merengue y sabor serrano", cat: "costa", badge: "Tradición", code: "BAL", img: "images/balcarce.webp" },
  { id: "fulbito", name: "FULBITO MANÍ", desc: "Pura nostalgia escolar de los 90s", cat: "kiosco", badge: "Nostalgia", code: "FUL", img: "images/fulbito.jpg" },
  { id: "jorgelin-triple", name: "JORGELÍN TRIPLE", desc: "La versión gigante del clásico Jorgito", cat: "kiosco", badge: "Triple", code: "JGT", img: "images/jorgelin-triple.webp" },
  { id: "tatin-simple", name: "TATÍN SIMPLE", desc: "El clásico de quiosco a precio popular", cat: "kiosco", badge: "Retro", code: "TAT", img: "images/tatin-simple.webp" },
  { id: "grandote-triple", name: "GRANDOTE TRIPLE", desc: "Doble piso y máxima contundencia popular", cat: "kiosco", badge: "Triple", code: "GRA", img: "images/grandote-triple.webp" },
  { id: "guaymallen-blanco", name: "GUAYMALLÉN BLANCO", desc: "El clásico de vainilla con glasé", cat: "kiosco", badge: "Blanco", code: "GUB", img: "images/guaymallen-blanco.webp" },
  { id: "jorgito-blanco", name: "JORGITO BLANCO", desc: "Bañado en azúcar glasé suave", cat: "kiosco", badge: "Blanco", code: "JOB", img: "images/jorgito-blanco.webp" },
  { id: "capitan-blanco", name: "CAPITÁN DEL ESPACIO BLANCO", desc: "La mítica versión con baño blanco", cat: "pedidos", badge: "Blanco", code: "CPB", img: "images/capitan-blanco.webp" },
  { id: "fantoche-blanco", name: "FANTOCHE BLANCO (DAY)", desc: "Triple blanco clásico", cat: "kiosco", badge: "Triple", code: "FNB", img: "images/fantoche-blanco.webp" },
  { id: "tofi-negro", name: "TOFI NEGRO", desc: "El alfajor suave de dulce de leche Arcor", cat: "kiosco", badge: "Tofi", code: "TOF", img: "images/tofi-negro.webp" },
  { id: "vauquita", name: "VAUQUITA", desc: "Relleno del auténtico dulce de leche de campo", cat: "kiosco", badge: "Vauquita", code: "VAU", img: "images/vauquita.webp" }
];

// Progression for 32 tournament
function getNextSlotId(slotId) {
  if (slotId === 'FINAL_L' || slotId === 'FINAL_R') return 'CHAMPION';

  const parts = slotId.split('_'); // ['L', 'R0', 'M0', 'A']
  if (parts.length < 4) return null;

  const side = parts[0]; // 'L' or 'R'
  const roundIdx = parseInt(parts[1].replace('R', ''), 10);
  const matchIdx = parseInt(parts[2].replace('M', ''), 10);

  // In 32: R0 (16avos), R1 (Octavos), R2 (Cuartos), R3 (Semis)
  if (roundIdx === 3) {
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
      const defaultMap = new Map(DEFAULT_ALFAJORES_32.map(a => [a.id, a]));
      
      // Merge defaults with saved list
      let alfajores = [...DEFAULT_ALFAJORES_32];
      if (Array.isArray(data.alfajores)) {
        const customOnes = data.alfajores.filter(a => a.id.startsWith('custom-'));
        alfajores = [...DEFAULT_ALFAJORES_32, ...customOnes];
      }

      const bracketState = data.bracketState || {};
      // Update image paths for bracket
      Object.keys(bracketState).forEach(slotId => {
        const item = bracketState[slotId];
        if (item && defaultMap.has(item.id)) {
          bracketState[slotId] = { ...item, img: defaultMap.get(item.id).img };
        }
      });

      return {
        size: 32,
        alfajores,
        bracketState,
        activeMatch: data.activeMatch || null, // { matchKey, slotA, slotB, label }
        votes: data.votes || {}, // { [matchKey]: { [slotKey]: [voterIds...] } }
        updatedAt: new Date().toISOString()
      };
    } catch (e) {
      console.error('Error reading state file, starting fresh', e);
    }
  }

  // Fresh initial 32 state
  const state = {
    size: 32,
    alfajores: [...DEFAULT_ALFAJORES_32],
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

  // Clear or mark finished
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

// 6. Fill Initial 32 Slots with Catalog
app.post('/api/bracket/fill-all', (req, res) => {
  const initialSlots = [
    'L_R0_M0_A', 'L_R0_M0_B', 'L_R0_M1_A', 'L_R0_M1_B',
    'L_R0_M2_A', 'L_R0_M2_B', 'L_R0_M3_A', 'L_R0_M3_B',
    'L_R0_M4_A', 'L_R0_M4_B', 'L_R0_M5_A', 'L_R0_M5_B',
    'L_R0_M6_A', 'L_R0_M6_B', 'L_R0_M7_A', 'L_R0_M7_B',
    'R_R0_M0_A', 'R_R0_M0_B', 'R_R0_M1_A', 'R_R0_M1_B',
    'R_R0_M2_A', 'R_R0_M2_B', 'R_R0_M3_A', 'R_R0_M3_B',
    'R_R0_M4_A', 'R_R0_M4_B', 'R_R0_M5_A', 'R_R0_M5_B',
    'R_R0_M6_A', 'R_R0_M6_B', 'R_R0_M7_A', 'R_R0_M7_B'
  ];

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
  const { name, img } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newAlf = {
    id: 'custom-' + Date.now(),
    name: name.toUpperCase().trim(),
    desc: 'Alfajor personalizado de la oficina',
    cat: 'pedidos',
    badge: 'Custom',
    code: name.substring(0, 3).toUpperCase(),
    img: img || 'images/alfajor-default.webp'
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
    console.log('   🏆 MUNDIAL DE ALFAJORES (32) - SERVIDOR DE OFICINA 🏆');
    console.log('=============================================================');
    console.log(` • Servidor local (esta PC):     http://localhost:${PORT}`);
    console.log(` • Servidor para celulares (LAN): http://${localIP}:${PORT}`);
    console.log(' • Memoria persistente guardada en data/mundial_state.json');
    console.log(' • Sincronización en tiempo real por WebSockets activa');
    console.log('=============================================================\n');
  });
}

module.exports = app;
