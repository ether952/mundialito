// 64 Argentine Alfajores Catalog (Sin imágenes / Monogramas de alto contraste)
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

// Persistent Voter ID for this device
function getVoterId() {
  let id = localStorage.getItem('mundial_voter_id_v64');
  if (!id) {
    id = 'voter_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('mundial_voter_id_v64', id);
  }
  return id;
}
const myVoterId = getVoterId();

// Application State
let isServerConnected = false;
let socket = null;
let networkInfo = { ip: 'localhost', port: 3000, url: window.location.origin, qr: '' };
let connectedCount = 1;

let tournamentSize = 64; // Default to 64 (32avos), or can toggle to 32
let ALFAJORES_DATA = [...DEFAULT_ALFAJORES_64];
let bracketState = {};
let activeMatch = null;
let votes = {};

let progressionMap = {};
let initialSlotsList = [];
let zoomLevel = 0.85;
let selectedAlfajorForPlacement = null;
let currentDragPayload = null;

const PITCH_0 = 80;
const MATCH_H = 68;
const HEADER_OFFSET = 30;

function calcMatchTop(m, r) {
  const offset = PITCH_0 * (Math.pow(2, r) - 1) / 2;
  const pitch = PITCH_0 * Math.pow(2, r);
  return HEADER_OFFSET + offset + m * pitch;
}

function calcMatchCenter(m, r) {
  return calcMatchTop(m, r) + MATCH_H / 2;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.style.display = 'none'; }, 2800);
}

// Direct Cloud Database Synchronization (Upstash Redis)
const UPSTASH_URL = 'https://golden-cub-247635.upstash.io';
const UPSTASH_TOKEN = 'gQAAAAAAA8dTAQIgcDIxNDQ5MzJiMGU2N2I0ZjhjYjFmYTU0ZDllODZkNTYyNQ';
const UPSTASH_KEY = 'mundial_state';

let lastStateFingerprint = '';
let fetchFailuresCount = 0;
let isSavingCloud = false;
let pendingSaveCloud = false;

async function syncWithServer() {
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${UPSTASH_KEY}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.result) {
        const state = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
        fetchFailuresCount = 0;
        isServerConnected = true;
        updateConnectionBadge(true);
        handleIncomingState(state);
      }
    } else {
      fetchFailuresCount++;
      if (fetchFailuresCount >= 3) updateConnectionBadge(false);
    }
  } catch (err) {
    fetchFailuresCount++;
    if (fetchFailuresCount >= 3) updateConnectionBadge(false);
  }
}

async function persistStateToCloud() {
  const payload = {
    size: tournamentSize,
    alfajores: ALFAJORES_DATA,
    bracketState: bracketState,
    activeMatch: activeMatch,
    votes: votes,
    updatedAt: new Date().toISOString()
  };

  saveToLocalStorage();

  if (isSavingCloud) {
    pendingSaveCloud = true;
    return;
  }
  isSavingCloud = true;

  try {
    await fetch(`${UPSTASH_URL}/set/${UPSTASH_KEY}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    lastStateFingerprint = JSON.stringify({
      size: payload.size,
      bracket: payload.bracketState,
      match: payload.activeMatch,
      votes: payload.votes,
      alfCount: payload.alfajores ? payload.alfajores.length : 0,
      updatedAt: payload.updatedAt
    });
    updateConnectionBadge(true);
  } catch (err) {
    console.error('Error saving to cloud:', err);
  } finally {
    isSavingCloud = false;
    if (pendingSaveCloud) {
      pendingSaveCloud = false;
      persistStateToCloud();
    }
  }
}

function initWebSocket() {
  // Immediately sync from cloud on page start
  syncWithServer();

  // Poll cloud database every 2.5s for real-time multi-device sync
  setInterval(syncWithServer, 2500);

  // Sync on tab focus or visibility return
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') syncWithServer();
  });
  window.addEventListener('focus', syncWithServer);

  // Optional local WebSocket
  if (!window.location.host.includes('vercel.app')) {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    try {
      socket = new WebSocket(wsUrl);
      socket.onopen = () => { isServerConnected = true; updateConnectionBadge(true); };
      socket.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATE') {
            handleIncomingState(msg.state, msg.network, msg.connectedCount);
          }
        } catch (e) {}
      };
      socket.onclose = () => { socket = null; };
      socket.onerror = () => { socket = null; };
    } catch (err) { socket = null; }
  }
}

function updateConnectionBadge(connected) {
  const pill = document.getElementById('connection-pill');
  if (!pill) return;
  if (connected) {
    pill.className = 'connection-pill live';
    pill.innerHTML = `<span class="dot"></span> <span>EN VIVO (Nube Sincronizada)</span>`;
  } else {
    pill.className = 'connection-pill';
    pill.innerHTML = `<span>🟡</span> <span>MODO LOCAL</span>`;
  }
}

function handleIncomingState(state, net, count) {
  if (count !== undefined) connectedCount = count;
  if (net) networkInfo = net;

  if (state) {
    const fingerprint = JSON.stringify({
      size: state.size,
      bracket: state.bracketState,
      match: state.activeMatch,
      votes: state.votes,
      alfCount: state.alfajores ? state.alfajores.length : 0,
      updatedAt: state.updatedAt
    });

    if (fingerprint === lastStateFingerprint) {
      return;
    }
    lastStateFingerprint = fingerprint;

    const previousSize = tournamentSize;
    if (state.size && (state.size === 32 || state.size === 64)) {
      tournamentSize = state.size;
    }
    if (Array.isArray(state.alfajores) && state.alfajores.length > 0) {
      ALFAJORES_DATA = state.alfajores;
    }
    bracketState = state.bracketState || {};
    activeMatch = state.activeMatch || null;
    votes = state.votes || {};

    saveToLocalStorage();
    updateSizeButtonsUI();
    if (previousSize !== tournamentSize || !document.getElementById('tree-svg-connectors')) {
      buildBracket(tournamentSize);
    }
    refreshAllViews();
  }
}

function sendServerAction(url, payload) {
  // Instant direct persistence to Upstash cloud database!
  persistStateToCloud();

  // Also notify local server if running locally
  if (!window.location.host.includes('vercel.app')) {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(`mundial_size`, tournamentSize.toString());
    localStorage.setItem(`mundial_bracket_state_${tournamentSize}`, JSON.stringify(bracketState));
    localStorage.setItem(`mundial_alfajores_64`, JSON.stringify(ALFAJORES_DATA));
    localStorage.setItem(`mundial_active_match_${tournamentSize}`, JSON.stringify(activeMatch));
    localStorage.setItem(`mundial_votes_${tournamentSize}`, JSON.stringify(votes));
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const savedSize = localStorage.getItem('mundial_size');
    if (savedSize === '32' || savedSize === '64') {
      tournamentSize = parseInt(savedSize, 10);
    }

    const savedAlf = localStorage.getItem('mundial_alfajores_64');
    if (savedAlf) {
      const parsed = JSON.parse(savedAlf);
      if (Array.isArray(parsed) && parsed.length >= 32) {
        const customOnes = parsed.filter(a => a.id.startsWith('custom-'));
        ALFAJORES_DATA = [...DEFAULT_ALFAJORES_64, ...customOnes];
      }
    }

    const savedBracket = localStorage.getItem(`mundial_bracket_state_${tournamentSize}`);
    if (savedBracket) bracketState = JSON.parse(savedBracket);

    const savedActive = localStorage.getItem(`mundial_active_match_${tournamentSize}`);
    if (savedActive) activeMatch = JSON.parse(savedActive);

    const savedVotes = localStorage.getItem(`mundial_votes_${tournamentSize}`);
    if (savedVotes) votes = JSON.parse(savedVotes);
  } catch (e) {}
}

// Active Duel of the Day
function renderActiveDuelBanner() {
  const panel = document.getElementById('active-duel-panel');
  if (!panel) return;

  if (!activeMatch) {
    panel.innerHTML = `
      <div class="duel-banner-empty">
        <span>⚔️ <strong>Partido de hoy:</strong> Ningún duelo seleccionado aún.</span>
        <span style="font-size: 11px; color: #64748b;">Hacé clic en el botón <strong>⚔️</strong> de cualquier partido de la llave para abrir la votación.</span>
      </div>
    `;
    return;
  }

  const { matchKey, slotA, slotB, label } = activeMatch;
  const alfA = bracketState[slotA];
  const alfB = bracketState[slotB];

  if (!alfA && !alfB) {
    panel.innerHTML = `
      <div class="duel-banner-empty">
        <span>⚔️ Partido seleccionado (${escapeHtml(label)}): Aún faltan participantes en este duelo.</span>
        <button class="btn-close-duel" onclick="closeActiveDuel()">Cerrar</button>
      </div>
    `;
    return;
  }

  const matchVotes = votes[matchKey] || {};
  const votersA = matchVotes[slotA] || [];
  const votersB = matchVotes[slotB] || [];
  const votesA = votersA.length;
  const votesB = votersB.length;
  const totalVotes = votesA + votesB;

  const pctA = totalVotes > 0 ? Math.round((votesA / totalVotes) * 100) : 50;
  const pctB = totalVotes > 0 ? (100 - pctA) : 50;

  const isVotedA = votersA.includes(myVoterId);
  const isVotedB = votersB.includes(myVoterId);

  panel.innerHTML = `
    <div class="duel-banner-active">
      <div class="duel-header-line">
        <div class="duel-title-tag">
          <span>⚔️</span> <span>PARTIDO EN DISPUTA: ${escapeHtml(label)}</span>
        </div>
        <button class="btn-close-duel" onclick="closeActiveDuel()" title="Ocultar duelo">Cerrar</button>
      </div>

      <div class="duel-combatants-row">
        <!-- Contender A -->
        <div class="duel-card ${isVotedA ? 'is-voted' : ''}" style="${isVotedA ? 'border-color: #2563eb; background: #eff6ff;' : ''}">
          <div class="duel-code-circle" style="background: #2563eb; color: #fff;">${alfA ? escapeHtml(alfA.code || alfA.name.slice(0, 3)) : '?'}</div>
          <div class="duel-info">
            <div class="duel-name">${alfA ? escapeHtml(alfA.name) : 'Esperando rival...'}</div>
            ${alfA ? `<span class="duel-badge">${escapeHtml(alfA.badge || 'Alfajor')}</span>` : ''}
            <div style="font-size: 13px; font-weight: 800; color: #2563eb; margin: 4px 0;">
              ${votesA} ${votesA === 1 ? 'voto' : 'votos'} (${pctA}%)
            </div>
            ${alfA ? `
              <button class="btn-duel-vote ${isVotedA ? 'voted' : ''}" onclick="submitVote('${matchKey}', '${slotA}')">
                ${isVotedA ? '✓ Tu voto' : '🗳️ Votar este'}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Middle Controls -->
        <div class="duel-middle">
          <div class="vs-circle">VS</div>
          <button class="btn-finish-duel" onclick="finishActiveMatchPrompt()" title="Cerrar votación y avanzar al más votado">
            🏁 Definir Ganador
          </button>
        </div>

        <!-- Contender B -->
        <div class="duel-card ${isVotedB ? 'is-voted' : ''}" style="${isVotedB ? 'border-color: #dc2626; background: #fef2f2;' : ''}">
          <div class="duel-code-circle" style="background: #dc2626; color: #fff;">${alfB ? escapeHtml(alfB.code || alfB.name.slice(0, 3)) : '?'}</div>
          <div class="duel-info">
            <div class="duel-name">${alfB ? escapeHtml(alfB.name) : 'Esperando rival...'}</div>
            ${alfB ? `<span class="duel-badge">${escapeHtml(alfB.badge || 'Alfajor')}</span>` : ''}
            <div style="font-size: 13px; font-weight: 800; color: #dc2626; margin: 4px 0;">
              ${votesB} ${votesB === 1 ? 'voto' : 'votos'} (${pctB}%)
            </div>
            ${alfB ? `
              <button class="btn-duel-vote ${isVotedB ? 'voted' : ''}" onclick="submitVote('${matchKey}', '${slotB}')">
                ${isVotedB ? '✓ Tu voto' : '🗳️ Votar este'}
              </button>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Live Dual Comparison Bar -->
      <div class="duel-vote-bar-wrap">
        <div class="duel-bar-fill-a" style="width: ${pctA}%;"></div>
        <div class="duel-bar-fill-b" style="width: ${pctB}%;"></div>
      </div>
      <div class="duel-vote-bar-labels">
        <span style="color: #2563eb; font-weight: 800;">${pctA}%</span>
        <span style="color: #64748b; font-size: 11px; font-weight: 600;">🔥 ${totalVotes} ${totalVotes === 1 ? 'voto total en vivo' : 'votos totales en vivo'}</span>
        <span style="color: #dc2626; font-weight: 800;">${pctB}%</span>
      </div>
    </div>
  `;
}

window.selectMatchForToday = function (matchKey, slotA, slotB, label) {
  activeMatch = { matchKey, slotA, slotB, label };
  if (!votes[matchKey]) votes[matchKey] = {};

  saveToLocalStorage();
  sendServerAction('/api/active-match', activeMatch);
  refreshAllViews();
  showToast(`⚔️ Seleccionado: ${label}`);
};

window.closeActiveDuel = function () {
  activeMatch = null;
  saveToLocalStorage();
  sendServerAction('/api/active-match', { matchKey: null });
  renderActiveDuelBanner();
  highlightActiveMatchInBracket();
};

window.submitVote = async function (matchKey, slotChosen) {
  // 1. Optimistic instant visual update for zero latency
  if (!votes[matchKey]) votes[matchKey] = {};
  const matchVotes = votes[matchKey];

  Object.keys(matchVotes).forEach(slot => {
    if (Array.isArray(matchVotes[slot])) {
      matchVotes[slot] = matchVotes[slot].filter(id => id !== myVoterId);
    }
  });

  if (!matchVotes[slotChosen]) matchVotes[slotChosen] = [];
  matchVotes[slotChosen].push(myVoterId);

  renderActiveDuelBanner();
  showToast('🗳️ ¡Voto registrado!');

  // 2. Fetch latest votes from cloud database to merge and prevent overwriting other users
  try {
    const fresh = await fetchCloudState();
    if (fresh && fresh.votes) {
      votes = fresh.votes;
    }
  } catch (err) {}

  // 3. Re-apply voter to fresh dictionary
  if (!votes[matchKey]) votes[matchKey] = {};
  const freshVotes = votes[matchKey];
  Object.keys(freshVotes).forEach(slot => {
    if (Array.isArray(freshVotes[slot])) {
      freshVotes[slot] = freshVotes[slot].filter(id => id !== myVoterId);
    }
  });
  if (!freshVotes[slotChosen]) freshVotes[slotChosen] = [];
  freshVotes[slotChosen].push(myVoterId);

  renderActiveDuelBanner();
  await persistStateToCloud();
};

window.finishActiveMatchPrompt = function () {
  if (!activeMatch) return;
  const { matchKey, slotA, slotB } = activeMatch;
  const alfA = bracketState[slotA];
  const alfB = bracketState[slotB];

  if (!alfA && !alfB) {
    showToast('⚠️ No hay alfajores en este partido');
    return;
  }
  if (!alfA || !alfB) {
    const single = alfA ? slotA : slotB;
    finishMatchWithWinner(matchKey, single);
    return;
  }

  const matchVotes = votes[matchKey] || {};
  const countA = (matchVotes[slotA] || []).length;
  const countB = (matchVotes[slotB] || []).length;

  let winnerSlot = slotA;
  if (countB > countA) winnerSlot = slotB;
  else if (countA === countB) {
    const confirmA = confirm(`Empate (${countA} a ${countB}). ¿Gana "${alfA.name}"?`);
    winnerSlot = confirmA ? slotA : slotB;
  }

  finishMatchWithWinner(matchKey, winnerSlot);
};

function finishMatchWithWinner(matchKey, winnerSlot) {
  const winnerAlfajor = bracketState[winnerSlot];
  if (!winnerAlfajor) return;

  const nextSlot = progressionMap[winnerSlot];
  if (nextSlot) {
    bracketState[nextSlot] = winnerAlfajor;
  }

  activeMatch = null;

  saveToLocalStorage();
  sendServerAction('/api/finish-match', { matchKey, winnerSlot });
  refreshAllViews();

  if (nextSlot === 'CHAMPION') {
    triggerConfetti();
    showToast(`🏆 ¡${winnerAlfajor.name} ES EL GRAN CAMPEÓN DEL MUNDIAL! 🏆`);
  } else {
    showToast(`🎉 ¡Ganó ${winnerAlfajor.name} y avanzó!`);
  }
}

// ============================================================
// MATHEMATICAL TOURNAMENT TREE BRACKET WITH SVG CONNECTORS
// ============================================================
function getRoundsConfig(size) {
  if (size === 64) {
    return [
      { name: '32avos', matches: 16, isInitial: true },
      { name: '16avos', matches: 8, isInitial: false },
      { name: 'Octavos', matches: 4, isInitial: false },
      { name: 'Cuartos', matches: 2, isInitial: false },
      { name: 'Semis', matches: 1, isInitial: false }
    ];
  } else {
    return [
      { name: '16avos', matches: 8, isInitial: true },
      { name: 'Octavos', matches: 4, isInitial: false },
      { name: 'Cuartos', matches: 2, isInitial: false },
      { name: 'Semis', matches: 1, isInitial: false }
    ];
  }
}

function buildBracket(size = tournamentSize) {
  tournamentSize = size;
  const stageEl = document.getElementById('bracket-stage');
  if (!stageEl) return;
  stageEl.innerHTML = '';
  initialSlotsList = [];
  progressionMap = {};

  const rounds = getRoundsConfig(size);
  const initialMatchesPerSide = rounds[0].matches;
  const colHeight = initialMatchesPerSide * PITCH_0 + HEADER_OFFSET + 20;

  // 1. Build Left Half
  const leftHalf = document.createElement('div');
  leftHalf.className = 'bracket-half left';

  rounds.forEach((rnd, rIdx) => {
    const col = document.createElement('div');
    col.className = 'round-column';
    col.style.height = `${colHeight}px`;

    const header = document.createElement('div');
    header.className = 'round-header';
    header.textContent = `${rnd.name} (Izq)`;
    col.appendChild(header);

    for (let m = 0; m < rnd.matches; m++) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';
      const matchKey = `L_R${rIdx}_M${m}`;
      matchDiv.dataset.matchKey = matchKey;
      matchDiv.style.top = `${calcMatchTop(m, rIdx)}px`;

      const slotAId = `${matchKey}_A`;
      const slotBId = `${matchKey}_B`;

      if (rnd.isInitial) {
        initialSlotsList.push(slotAId);
        initialSlotsList.push(slotBId);
      }

      // Progression calculation
      if (rIdx < rounds.length - 1) {
        const nextMatch = Math.floor(m / 2);
        const nextLetter = (m % 2 === 0) ? 'A' : 'B';
        const nextSlotId = `L_R${rIdx + 1}_M${nextMatch}_${nextLetter}`;
        progressionMap[slotAId] = nextSlotId;
        progressionMap[slotBId] = nextSlotId;
      } else {
        progressionMap[slotAId] = 'FINAL_L';
        progressionMap[slotBId] = 'FINAL_L';
      }

      matchDiv.innerHTML = `
        <div class="match-header-row">
          <span class="match-code-tag">${rnd.name} · M${m + 1}</span>
          <button class="btn-match-play" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Izq) M${m + 1}')" title="Jugar este partido hoy">
            ⚔️ Jugar
          </button>
        </div>
        <div class="bracket-slot" data-slot-id="${slotAId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}A</span>
        </div>
        <div class="bracket-slot" data-slot-id="${slotBId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}B</span>
        </div>
      `;

      col.appendChild(matchDiv);
    }

    leftHalf.appendChild(col);

    // Add SVG connector to next round
    if (rIdx < rounds.length - 1) {
      const nextCount = rounds[rIdx + 1].matches;
      const connectorCol = document.createElement('div');
      connectorCol.className = 'connector-column';
      connectorCol.style.height = `${colHeight}px`;

      let svg = `<svg width="32" height="${colHeight}" xmlns="http://www.w3.org/2000/svg">`;
      for (let k = 0; k < nextCount; k++) {
        const y1 = calcMatchCenter(2 * k, rIdx);
        const y2 = calcMatchCenter(2 * k + 1, rIdx);
        const yMid = calcMatchCenter(k, rIdx + 1);
        svg += `<path d="M 0,${y1} H 16 V ${y2} H 0 M 16,${yMid} H 32" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />`;
      }
      svg += `</svg>`;
      connectorCol.innerHTML = svg;
      leftHalf.appendChild(connectorCol);
    }
  });

  // Connector between Left Semifinal and Final
  const leftFinalConnector = document.createElement('div');
  leftFinalConnector.className = 'connector-column';
  leftFinalConnector.style.height = `${colHeight}px`;
  const ySemiLeft = calcMatchCenter(0, rounds.length - 1);
  leftFinalConnector.innerHTML = `
    <svg width="32" height="${colHeight}" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,${ySemiLeft} H 32" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>
  `;
  leftHalf.appendChild(leftFinalConnector);

  stageEl.appendChild(leftHalf);

  // 2. Build Center (Gran Final & Campeón)
  const centerDiv = document.createElement('div');
  centerDiv.className = 'bracket-center';
  centerDiv.style.height = `${colHeight}px`;

  progressionMap['FINAL_L'] = 'CHAMPION';
  progressionMap['FINAL_R'] = 'CHAMPION';

  centerDiv.innerHTML = `
    <div class="center-stage-container" style="top: ${ySemiLeft}px;">
      <div class="champion-box">
        <div class="trophy-badge">🏆</div>
        <div class="champion-label">GRAN CAMPEÓN</div>
        <div class="bracket-slot champion-slot" data-slot-id="CHAMPION">
          <span class="slot-placeholder">👑 Campeón del Mundial</span>
        </div>
      </div>

      <div class="final-box">
        <div class="round-header" style="width: 100%; border: none; margin-bottom: 2px;">GRAN FINAL</div>
        <div class="bracket-slot" data-slot-id="FINAL_L">
          <span class="slot-placeholder">Ganador Semifinal Izq</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 4px;">
          <div class="vs-tag-bracket">VS</div>
          <button class="btn-match-play" onclick="selectMatchForToday('FINAL_MATCH', 'FINAL_L', 'FINAL_R', 'GRAN FINAL DEL MUNDIAL')" title="Jugar Gran Final">
            ⚔️ Jugar Final
          </button>
        </div>
        <div class="bracket-slot" data-slot-id="FINAL_R">
          <span class="slot-placeholder">Ganador Semifinal Der</span>
        </div>
      </div>
    </div>
  `;

  stageEl.appendChild(centerDiv);

  // 3. Build Right Half
  const rightHalf = document.createElement('div');
  rightHalf.className = 'bracket-half right';

  // Connector between Right Semifinal and Final
  const rightFinalConnector = document.createElement('div');
  rightFinalConnector.className = 'connector-column';
  rightFinalConnector.style.height = `${colHeight}px`;
  rightFinalConnector.innerHTML = `
    <svg width="32" height="${colHeight}" xmlns="http://www.w3.org/2000/svg">
      <path d="M 32,${ySemiLeft} H 0" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>
  `;
  rightHalf.appendChild(rightFinalConnector);

  rounds.forEach((rnd, rIdx) => {
    const col = document.createElement('div');
    col.className = 'round-column';
    col.style.height = `${colHeight}px`;

    const header = document.createElement('div');
    header.className = 'round-header';
    header.textContent = `${rnd.name} (Der)`;
    col.appendChild(header);

    for (let m = 0; m < rnd.matches; m++) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';
      const matchKey = `R_R${rIdx}_M${m}`;
      matchDiv.dataset.matchKey = matchKey;
      matchDiv.style.top = `${calcMatchTop(m, rIdx)}px`;

      const slotAId = `${matchKey}_A`;
      const slotBId = `${matchKey}_B`;

      if (rnd.isInitial) {
        initialSlotsList.push(slotAId);
        initialSlotsList.push(slotBId);
      }

      // Progression calculation
      if (rIdx < rounds.length - 1) {
        const nextMatch = Math.floor(m / 2);
        const nextLetter = (m % 2 === 0) ? 'A' : 'B';
        const nextSlotId = `R_R${rIdx + 1}_M${nextMatch}_${nextLetter}`;
        progressionMap[slotAId] = nextSlotId;
        progressionMap[slotBId] = nextSlotId;
      } else {
        progressionMap[slotAId] = 'FINAL_R';
        progressionMap[slotBId] = 'FINAL_R';
      }

      matchDiv.innerHTML = `
        <div class="match-header-row">
          <span class="match-code-tag">${rnd.name} · M${m + 1}</span>
          <button class="btn-match-play" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Der) M${m + 1}')" title="Jugar este partido hoy">
            ⚔️ Jugar
          </button>
        </div>
        <div class="bracket-slot" data-slot-id="${slotAId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}A</span>
        </div>
        <div class="bracket-slot" data-slot-id="${slotBId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}B</span>
        </div>
      `;

      col.appendChild(matchDiv);
    }

    rightHalf.appendChild(col);

    // Add SVG connector to next round
    if (rIdx < rounds.length - 1) {
      const nextCount = rounds[rIdx + 1].matches;
      const connectorCol = document.createElement('div');
      connectorCol.className = 'connector-column';
      connectorCol.style.height = `${colHeight}px`;

      let svg = `<svg width="32" height="${colHeight}" xmlns="http://www.w3.org/2000/svg">`;
      for (let k = 0; k < nextCount; k++) {
        const y1 = calcMatchCenter(2 * k, rIdx);
        const y2 = calcMatchCenter(2 * k + 1, rIdx);
        const yMid = calcMatchCenter(k, rIdx + 1);
        svg += `<path d="M 32,${y1} H 16 V ${y2} H 32 M 16,${yMid} H 0" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />`;
      }
      svg += `</svg>`;
      connectorCol.innerHTML = svg;
      rightHalf.appendChild(connectorCol);
    }
  });

  stageEl.appendChild(rightHalf);

  attachSlotListeners();
}

function attachSlotListeners() {
  document.querySelectorAll('.bracket-slot').forEach(slot => {
    slot.addEventListener('click', (e) => {
      if (e.target.closest('.btn-action')) return;
      handleSlotClick(slot);
    });

    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('awaiting-placement');
    });

    slot.addEventListener('dragleave', () => {
      slot.classList.remove('awaiting-placement');
    });

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('awaiting-placement');
      handleSlotDrop(slot);
    });
  });
}

function handleSlotClick(slotEl) {
  const slotId = slotEl.dataset.slotId;
  if (!slotId) return;

  if (selectedAlfajorForPlacement) {
    placeAlfajorInSlot(slotId, selectedAlfajorForPlacement);
    clearPlacementSelection();
  }
}

function handleSlotDrop(slotEl) {
  const slotId = slotEl.dataset.slotId;
  if (!slotId || !currentDragPayload) return;
  placeAlfajorInSlot(slotId, currentDragPayload);
  currentDragPayload = null;
}

function placeAlfajorInSlot(slotId, alfajor) {
  bracketState[slotId] = alfajor;
  saveToLocalStorage();
  sendServerAction('/api/bracket/slot', { slotId, alfajor });
  refreshAllViews();
  showToast(`✅ ${alfajor.name} colocado en la llave`);
}

function removeAlfajorFromSlot(slotId) {
  delete bracketState[slotId];
  saveToLocalStorage();
  sendServerAction('/api/bracket/slot', { slotId, alfajor: null });
  refreshAllViews();
}

function advanceSlot(slotId) {
  const current = bracketState[slotId];
  if (!current) return;

  const nextSlot = progressionMap[slotId];
  if (!nextSlot) return;

  bracketState[nextSlot] = current;
  saveToLocalStorage();
  sendServerAction('/api/bracket/advance', { slotId });
  refreshAllViews();

  if (nextSlot === 'CHAMPION') {
    triggerConfetti();
    showToast(`🏆 ¡${current.name} ES EL GRAN CAMPEÓN! 🏆`);
  } else {
    showToast(`➔ ${current.name} avanzó a la siguiente ronda`);
  }
}

function renderBracketSlots() {
  document.querySelectorAll('.bracket-slot').forEach(slot => {
    const slotId = slot.dataset.slotId;
    const alfajor = bracketState[slotId];

    if (alfajor) {
      slot.classList.add('filled');
      slot.innerHTML = `
        <div class="slot-content" draggable="true" ondragstart="handleSlotDragStart(event, '${slotId}')">
          <div class="slot-code-pill">${escapeHtml(alfajor.code || alfajor.name.slice(0, 3))}</div>
          <div class="slot-title-box">
            <div class="slot-name" title="${escapeHtml(alfajor.name)}">${escapeHtml(alfajor.name)}</div>
          </div>
          <div class="slot-controls">
            ${slotId !== 'CHAMPION' ? `
              <button class="btn-action btn-advance" onclick="event.stopPropagation(); advanceSlot('${slotId}')" title="Avanzar de ronda">➔</button>
            ` : ''}
            <button class="btn-action" onclick="event.stopPropagation(); removeAlfajorFromSlot('${slotId}')" title="Quitar">✕</button>
          </div>
        </div>
      `;
    } else {
      slot.classList.remove('filled');
      const placeholder = getPlaceholderLabel(slotId);
      slot.innerHTML = `<span class="slot-placeholder">${escapeHtml(placeholder)}</span>`;
    }
  });

  highlightActiveMatchInBracket();
}

function getPlaceholderLabel(slotId) {
  if (slotId === 'CHAMPION') return '👑 Campeón';
  if (slotId === 'FINAL_L') return 'Finalista Izq';
  if (slotId === 'FINAL_R') return 'Finalista Der';

  const parts = slotId.split('_'); // ['L', 'R0', 'M0', 'A']
  if (parts.length >= 4) {
    const rIdx = parseInt(parts[1].replace('R', ''), 10);
    const mIdx = parseInt(parts[2].replace('M', ''), 10) + 1;
    const letter = parts[3];
    const rounds = getRoundsConfig(tournamentSize);
    const rName = rounds[rIdx]?.name || 'Ronda';
    return `${rName} ${mIdx}${letter}`;
  }
  return 'Vacío';
}

function highlightActiveMatchInBracket() {
  document.querySelectorAll('.matchup').forEach(m => m.classList.remove('active-in-duel'));
  if (!activeMatch) return;

  const mEl = document.querySelector(`.matchup[data-match-key="${activeMatch.matchKey}"]`);
  if (mEl) mEl.classList.add('active-in-duel');
}

window.handleSlotDragStart = function (e, slotId) {
  const alf = bracketState[slotId];
  if (!alf) return;
  currentDragPayload = alf;
  e.dataTransfer.setData('text/plain', JSON.stringify(alf));
};

// Sidebar Catalog
function renderAlfajoresList() {
  const listEl = document.getElementById('alfajores-list');
  const countBadge = document.getElementById('count-badge');
  const searchInput = document.getElementById('search-input');
  if (!listEl) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const usedIds = new Set(Object.values(bracketState).map(a => a?.id).filter(Boolean));

  const filtered = ALFAJORES_DATA.filter(alf => {
    return alf.name.toLowerCase().includes(query) ||
      (alf.desc && alf.desc.toLowerCase().includes(query)) ||
      (alf.badge && alf.badge.toLowerCase().includes(query));
  });

  if (countBadge) countBadge.textContent = ALFAJORES_DATA.length;
  listEl.innerHTML = '';

  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="padding: 14px; text-align: center; color: #94a3b8; font-size: 11px;">No se encontraron alfajores</div>`;
    return;
  }

  filtered.forEach(alf => {
    const isUsed = usedIds.has(alf.id);
    const isSelected = selectedAlfajorForPlacement?.id === alf.id;

    const item = document.createElement('div');
    item.className = `alfajor-item ${isUsed ? 'used' : ''} ${isSelected ? 'selected-for-place' : ''}`;
    item.draggable = true;

    item.addEventListener('dragstart', (e) => {
      currentDragPayload = alf;
      e.dataTransfer.setData('text/plain', JSON.stringify(alf));
    });

    item.addEventListener('click', () => {
      if (selectedAlfajorForPlacement?.id === alf.id) {
        clearPlacementSelection();
      } else {
        selectedAlfajorForPlacement = alf;
        updateSelectionHint();
        renderAlfajoresList();
      }
    });

    item.innerHTML = `
      <div class="alfajor-code-badge">${escapeHtml(alf.code || alf.name.slice(0, 3))}</div>
      <div class="alfajor-info">
        <div class="alfajor-name">${escapeHtml(alf.name)}</div>
        <div class="alfajor-desc">${escapeHtml(alf.desc || '')}</div>
      </div>
      <span class="alfajor-badge">${escapeHtml(alf.badge || 'Clásico')}</span>
      ${alf.id.startsWith('custom-') ? `
        <button class="btn-delete-alfajor" onclick="event.stopPropagation(); deleteCustomAlfajor('${alf.id}')" title="Eliminar">✕</button>
      ` : ''}
    `;

    listEl.appendChild(item);
  });
}

function updateSelectionHint() {
  const hint = document.getElementById('selection-hint');
  if (!hint) return;
  if (selectedAlfajorForPlacement) {
    hint.className = 'selection-hint active';
    hint.innerHTML = `👉 Hacé clic en cualquier casillero para ubicar a <strong>${escapeHtml(selectedAlfajorForPlacement.name)}</strong>. <a href="javascript:clearPlacementSelection()" style="color: #854d0e; margin-left: 6px;">(Cancelar)</a>`;
  } else {
    hint.className = 'selection-hint';
    hint.innerHTML = '';
  }
}

window.clearPlacementSelection = function () {
  selectedAlfajorForPlacement = null;
  updateSelectionHint();
  renderAlfajoresList();
};

window.deleteCustomAlfajor = function (id) {
  if (!confirm('¿Eliminar este alfajor?')) return;
  ALFAJORES_DATA = ALFAJORES_DATA.filter(a => a.id !== id);
  Object.keys(bracketState).forEach(slotId => {
    if (bracketState[slotId]?.id === id) delete bracketState[slotId];
  });

  saveToLocalStorage();
  sendServerAction('/api/alfajor/delete', { id });
  refreshAllViews();
};

// Size Switcher (32 vs 64)
window.switchTournamentSize = function (newSize) {
  if (newSize === tournamentSize) return;
  if (Object.keys(bracketState).length > 0) {
    if (!confirm(`¿Cambiar la llave a ${newSize} alfajores? Se reiniciará la distribución de casilleros.`)) return;
  }

  tournamentSize = newSize;
  bracketState = {};
  activeMatch = null;
  votes = {};

  saveToLocalStorage();
  updateSizeButtonsUI();
  buildBracket(tournamentSize);
  refreshAllViews();
  setTimeout(fitToScreen, 150);
  sendServerAction('/api/tournament/size', { size: newSize });
  showToast(`📐 Llave cambiada a ${tournamentSize === 64 ? '64 alfajores (32avos)' : '32 alfajores (16avos)'}`);
};

function updateSizeButtonsUI() {
  const btn32 = document.getElementById('btn-size-32');
  const btn64 = document.getElementById('btn-size-64');
  const sizeBadge = document.getElementById('header-size-badge');

  if (btn32) btn32.classList.toggle('active', tournamentSize === 32);
  if (btn64) btn64.classList.toggle('active', tournamentSize === 64);
  if (sizeBadge) {
    sizeBadge.textContent = tournamentSize === 64 ? '64 (32avos)' : '32 (16avos)';
  }
}

// Zoom & Viewport
function setZoom(level) {
  zoomLevel = Math.max(0.3, Math.min(1.8, level));
  const canvas = document.getElementById('bracket-canvas');
  const zoomText = document.getElementById('zoom-text');
  if (canvas) canvas.style.transform = `scale(${zoomLevel})`;
  if (zoomText) zoomText.textContent = `${Math.round(zoomLevel * 100)}%`;
}

function fitToScreen() {
  const viewport = document.getElementById('bracket-viewport');
  const stage = document.getElementById('bracket-stage');
  if (!viewport || !stage) return;

  const vpW = viewport.clientWidth - 40;
  const vpH = viewport.clientHeight - 60;
  const stW = stage.scrollWidth;
  const stH = stage.scrollHeight;

  if (stW > 0 && stH > 0) {
    const scale = Math.min(vpW / stW, vpH / stH, 1.0);
    setZoom(Math.max(scale, 0.35));
  }
}

// Modal & QR
window.openQRModal = function () {
  const modal = document.getElementById('qr-modal');
  if (!modal) return;
  const qrBox = document.getElementById('qr-url-text');
  if (qrBox) qrBox.textContent = networkInfo.url || window.location.href;
  modal.classList.add('active');
};

window.closeQRModal = function () {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('active');
};

window.copyOfficeLink = function () {
  const url = networkInfo.url || window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('📋 ¡Enlace copiado al portapapeles!');
  }).catch(() => {
    prompt('Copiá el enlace manualmente:', url);
  });
};

function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#f59e0b', '#2563eb', '#16a34a', '#ec4899', '#8b5cf6', '#ef4444'];
  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 4 + 2,
      vx: (Math.random() - 0.5) * 3,
      angle: Math.random() * 360,
      vAngle: (Math.random() - 0.5) * 10
    });
  }

  let frame = 0;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.angle += p.vAngle;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (frame < 180) {
      requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  update();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function refreshAllViews() {
  renderAlfajoresList();
  renderBracketSlots();
  renderActiveDuelBanner();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  updateSizeButtonsUI();
  buildBracket(tournamentSize);
  initWebSocket();

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.addEventListener('input', renderAlfajoresList);

  // Zoom buttons
  const btnZoomIn = document.getElementById('btn-zoom-in');
  if (btnZoomIn) btnZoomIn.addEventListener('click', () => setZoom(zoomLevel + 0.1));

  const btnZoomOut = document.getElementById('btn-zoom-out');
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => setZoom(zoomLevel - 0.1));

  const btnZoomReset = document.getElementById('btn-zoom-reset');
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => setZoom(0.85));

  const fitBtn = document.getElementById('btn-fit-screen');
  if (fitBtn) fitBtn.addEventListener('click', fitToScreen);

  // Size toggle buttons
  const btn32 = document.getElementById('btn-size-32');
  if (btn32) btn32.addEventListener('click', () => switchTournamentSize(32));

  const btn64 = document.getElementById('btn-size-64');
  if (btn64) btn64.addEventListener('click', () => switchTournamentSize(64));

  // QR Modal Button
  const btnQR = document.getElementById('btn-open-qr');
  if (btnQR) btnQR.addEventListener('click', () => openQRModal());

  const modalQr = document.getElementById('qr-modal');
  if (modalQr) {
    modalQr.addEventListener('click', (e) => {
      if (e.target === modalQr) closeQRModal();
    });
  }

  // Auto-fill all initial slots
  const btnFill = document.getElementById('btn-fill-all');
  if (btnFill) {
    btnFill.addEventListener('click', () => {
      const usedIds = new Set(Object.values(bracketState).map(a => a?.id).filter(Boolean));
      const available = ALFAJORES_DATA.filter(a => !usedIds.has(a.id));

      let availIdx = 0;
      initialSlotsList.forEach(slotId => {
        if (!bracketState[slotId] && available[availIdx]) {
          bracketState[slotId] = available[availIdx];
          availIdx++;
        }
      });

      saveToLocalStorage();
      sendServerAction('/api/bracket/fill-all', { size: tournamentSize });
      refreshAllViews();
      showToast(`🎲 ¡Llave completada con los ${initialSlotsList.length} alfajores!`);
    });
  }

  // Clear Bracket
  const btnClear = document.getElementById('btn-clear');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (!confirm('¿Vaciar toda la llave del torneo?')) return;
      bracketState = {};
      activeMatch = null;
      votes = {};

      saveToLocalStorage();
      sendServerAction('/api/bracket/reset', {});
      refreshAllViews();
      showToast('🗑️ Llave vaciada');
    });
  }

  // Print button
  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      setZoom(1.0);
      setTimeout(() => window.print(), 200);
    });
  }

  // Add custom alfajor
  const customForm = document.getElementById('custom-form');
  if (customForm) {
    customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputName = document.getElementById('custom-name');
      const name = inputName ? inputName.value.trim() : '';
      if (!name) return;

      const newAlf = {
        id: 'custom-' + Date.now(),
        name: name.toUpperCase(),
        desc: 'Alfajor personalizado',
        cat: 'personalizado',
        badge: 'Custom',
        code: name.substring(0, 3).toUpperCase()
      };

      ALFAJORES_DATA.unshift(newAlf);
      saveToLocalStorage();
      sendServerAction('/api/alfajor/add', { name });

      if (inputName) inputName.value = '';
      refreshAllViews();
      showToast(`✨ Alfajor "${newAlf.name}" agregado`);
    });
  }

  refreshAllViews();
  setTimeout(fitToScreen, 200);
});
