// 64 Argentine Alfajores Catalog (Sin imágenes / Rendimiento ultra rápido)
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

let ALFAJORES_DATA = [...DEFAULT_ALFAJORES_64];
let bracketState = {};
let activeMatch = null; // { matchKey, slotA, slotB, label }
let votes = {}; // { [matchKey]: { [slotId]: [voterIds...] } }

let progressionMap = {};
let initialSlotsList = [];
let zoomLevel = 0.85;
let selectedAlfajorForPlacement = null;
let currentDragPayload = null;

// Toast helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.style.display = 'none'; }, 2800);
}

// ============================================================
// WEBSOCKET & STATE SYNC
// ============================================================
function initWebSocket() {
  const isHttp = window.location.protocol.startsWith('http');
  if (!isHttp) {
    updateConnectionBadge(false);
    loadFromLocalStorage();
    return;
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}`;

  try {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      isServerConnected = true;
      updateConnectionBadge(true);
    };

    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATE') {
          handleIncomingState(msg.state, msg.network, msg.connectedCount);
        }
      } catch (e) {
        console.error('Error handling WebSocket message', e);
      }
    };

    socket.onclose = () => {
      isServerConnected = false;
      updateConnectionBadge(false);
      setTimeout(initWebSocket, 3000);
    };

    socket.onerror = () => {
      isServerConnected = false;
      updateConnectionBadge(false);
    };
  } catch (err) {
    updateConnectionBadge(false);
  }
}

function updateConnectionBadge(connected) {
  const pill = document.getElementById('connection-pill');
  if (!pill) return;
  if (connected) {
    pill.className = 'connection-pill live';
    pill.innerHTML = `<span class="dot"></span> <span>EN VIVO (${connectedCount} disp.)</span>`;
    pill.title = 'Sincronizado en tiempo real por WebSocket';
  } else {
    pill.className = 'connection-pill';
    pill.innerHTML = `<span>🟡</span> <span>MODO LOCAL</span>`;
    pill.title = 'Guardado en la memoria de este navegador';
  }
}

function handleIncomingState(state, net, count) {
  if (count !== undefined) connectedCount = count;
  if (net) networkInfo = net;

  if (state) {
    if (Array.isArray(state.alfajores) && state.alfajores.length > 0) {
      ALFAJORES_DATA = state.alfajores;
    }
    bracketState = state.bracketState || {};
    activeMatch = state.activeMatch || null;
    votes = state.votes || {};

    saveToLocalStorage();
    refreshAllViews();
  }
}

function sendServerAction(url, payload) {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {
    // If offline or on static Vercel, state already preserved in localStorage
  });
}

// ============================================================
// LOCAL STORAGE PERSISTENCE FALLBACK
// ============================================================
function saveToLocalStorage() {
  try {
    localStorage.setItem('mundial_bracket_state_64', JSON.stringify(bracketState));
    localStorage.setItem('mundial_alfajores_64', JSON.stringify(ALFAJORES_DATA));
    localStorage.setItem('mundial_active_match_64', JSON.stringify(activeMatch));
    localStorage.setItem('mundial_votes_64', JSON.stringify(votes));
  } catch (e) {
    console.warn('LocalStorage save error', e);
  }
}

function loadFromLocalStorage() {
  try {
    const defaultMap = new Map(DEFAULT_ALFAJORES_64.map(a => [a.id, a]));
    const savedAlf = localStorage.getItem('mundial_alfajores_64');
    if (savedAlf) {
      const parsed = JSON.parse(savedAlf);
      if (Array.isArray(parsed) && parsed.length >= 32) {
        const customOnes = parsed.filter(a => a.id.startsWith('custom-'));
        ALFAJORES_DATA = [...DEFAULT_ALFAJORES_64, ...customOnes];
      }
    }

    const savedBracket = localStorage.getItem('mundial_bracket_state_64');
    if (savedBracket) bracketState = JSON.parse(savedBracket);

    const savedActive = localStorage.getItem('mundial_active_match_64');
    if (savedActive) activeMatch = JSON.parse(savedActive);

    const savedVotes = localStorage.getItem('mundial_votes_64');
    if (savedVotes) votes = JSON.parse(savedVotes);
  } catch (e) {
    console.warn('LocalStorage load error', e);
  }
}

// ============================================================
// ACTIVE DUEL / "PARTIDO DE HOY"
// ============================================================
function renderActiveDuelBanner() {
  const panel = document.getElementById('active-duel-panel');
  if (!panel) return;

  if (!activeMatch) {
    panel.innerHTML = `
      <div class="duel-banner-empty">
        <span>⚔️ <strong>Partido de hoy:</strong> Ningún duelo seleccionado aún.</span>
        <span style="font-size: 11.5px; color: #64748b;">Hacé clic en <strong>⚔️ Jugar hoy</strong> en cualquier partido de la llave.</span>
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
        <div class="duel-card ${isVotedA ? 'is-voted' : ''}">
          <div class="duel-code-circle">${alfA ? escapeHtml(alfA.code || alfA.name.slice(0, 3)) : '?'}</div>
          <div class="duel-info">
            <div class="duel-name">${alfA ? escapeHtml(alfA.name) : 'Esperando rival...'}</div>
            ${alfA ? `<span class="duel-badge">${escapeHtml(alfA.badge || 'Alfajor')}</span>` : ''}
            <div style="font-size: 11px; font-weight: 700; color: #475569; margin-bottom: 6px;">
              ${votesA} votos (${pctA}%)
            </div>
            ${alfA ? `
              <button class="btn-duel-vote ${isVotedA ? 'voted' : ''}" onclick="submitVote('${matchKey}', '${slotA}')">
                ${isVotedA ? '✓ Tu voto' : '🗳️ Votar'}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Middle Controls -->
        <div class="duel-middle">
          <div class="vs-circle">VS</div>
          <button class="btn-finish-duel" onclick="finishActiveMatchPrompt()" title="Cerrar votación y avanzar automáticamente al más votado a la siguiente ronda">
            🏁 Definir Ganador
          </button>
        </div>

        <!-- Contender B -->
        <div class="duel-card ${isVotedB ? 'is-voted' : ''}">
          <div class="duel-code-circle">${alfB ? escapeHtml(alfB.code || alfB.name.slice(0, 3)) : '?'}</div>
          <div class="duel-info">
            <div class="duel-name">${alfB ? escapeHtml(alfB.name) : 'Esperando rival...'}</div>
            ${alfB ? `<span class="duel-badge">${escapeHtml(alfB.badge || 'Alfajor')}</span>` : ''}
            <div style="font-size: 11px; font-weight: 700; color: #475569; margin-bottom: 6px;">
              ${votesB} votos (${pctB}%)
            </div>
            ${alfB ? `
              <button class="btn-duel-vote ${isVotedB ? 'voted' : ''}" onclick="submitVote('${matchKey}', '${slotB}')">
                ${isVotedB ? '✓ Tu voto' : '🗳️ Votar'}
              </button>
            ` : ''}
          </div>
        </div>
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

window.submitVote = function (matchKey, slotChosen) {
  if (!votes[matchKey]) votes[matchKey] = {};
  const matchVotes = votes[matchKey];

  Object.keys(matchVotes).forEach(slot => {
    if (Array.isArray(matchVotes[slot])) {
      matchVotes[slot] = matchVotes[slot].filter(id => id !== myVoterId);
    }
  });

  if (!matchVotes[slotChosen]) matchVotes[slotChosen] = [];
  matchVotes[slotChosen].push(myVoterId);

  saveToLocalStorage();
  sendServerAction('/api/vote', { matchKey, slotChosen, voterId: myVoterId });
  renderActiveDuelBanner();
  showToast('🗳️ ¡Voto registrado!');
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
    const confirmA = confirm(`Empate (${countA} a ${countB}). ¿Gana "${alfA.name}"? (Aceptar = Sí, Cancelar = Gana "${alfB.name}")`);
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
    showToast(`🎉 ¡Ganó ${winnerAlfajor.name} y avanzó a la siguiente ronda!`);
  }
}

// ============================================================
// BRACKET GENERATION (64 TEAMS / 32AVOS)
// ============================================================
function build64Bracket() {
  const stageEl = document.getElementById('bracket-stage');
  if (!stageEl) return;
  stageEl.innerHTML = '';
  initialSlotsList = [];
  progressionMap = {};

  // Rounds for 64 tournament (starting at 32avos):
  // 32avos: 16 matches per side (32 slots)
  // 16avos: 8 matches per side (16 slots)
  // Octavos: 4 matches per side (8 slots)
  // Cuartos: 2 matches per side (4 slots)
  // Semifinales: 1 match per side (2 slots)
  const roundsConfig = [
    { name: '32avos', matches: 16, isInitial: true },
    { name: '16avos', matches: 8, isInitial: false },
    { name: 'Octavos', matches: 4, isInitial: false },
    { name: 'Cuartos', matches: 2, isInitial: false },
    { name: 'Semifinal', matches: 1, isInitial: false }
  ];

  const colHeight = 16 * 105;

  // Render Left Half
  const leftHalf = document.createElement('div');
  leftHalf.className = 'bracket-half left';

  roundsConfig.forEach((rnd, rIdx) => {
    const col = document.createElement('div');
    col.className = 'round-column';
    col.style.height = `${colHeight}px`;

    const title = document.createElement('div');
    title.className = 'round-title';
    title.textContent = `${rnd.name} (Izq)`;
    col.appendChild(title);

    const matchupsContainer = document.createElement('div');
    matchupsContainer.className = 'matchups-container';

    for (let m = 0; m < rnd.matches; m++) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';
      const matchKey = `L_R${rIdx}_M${m}`;
      matchDiv.dataset.matchKey = matchKey;

      const slotAId = `${matchKey}_A`;
      const slotBId = `${matchKey}_B`;

      if (rnd.isInitial) {
        initialSlotsList.push(slotAId);
        initialSlotsList.push(slotBId);
      }

      // Progression calculation
      if (rIdx < roundsConfig.length - 1) {
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
        <div class="bracket-slot" data-slot-id="${slotAId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}A</span>
        </div>
        <button class="btn-select-match" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Izq) - Duelo ${m + 1}')" title="Seleccionar para votar hoy">
          ⚔️ Jugar hoy
        </button>
        <div class="bracket-slot" data-slot-id="${slotBId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}B</span>
        </div>
      `;

      matchupsContainer.appendChild(matchDiv);
    }

    col.appendChild(matchupsContainer);
    leftHalf.appendChild(col);
  });

  stageEl.appendChild(leftHalf);

  // Render Center (Final & Champion)
  const centerDiv = document.createElement('div');
  centerDiv.className = 'bracket-center';
  centerDiv.style.height = `${colHeight}px`;

  progressionMap['FINAL_L'] = 'CHAMPION';
  progressionMap['FINAL_R'] = 'CHAMPION';

  centerDiv.innerHTML = `
    <!-- Champion Box -->
    <div class="champion-box">
      <div class="trophy-badge">🏆</div>
      <div class="champion-label">CAMPEÓN DEL MUNDIAL</div>
      <div class="bracket-slot champion-slot" data-slot-id="CHAMPION">
        <span class="slot-placeholder">👑 Gran Campeón</span>
      </div>
    </div>

    <!-- Final Box -->
    <div class="final-box">
      <div class="round-title" style="width: 100%; margin-bottom: 4px;">GRAN FINAL</div>
      <div class="bracket-slot" data-slot-id="FINAL_L">
        <span class="slot-placeholder">Ganador Semifinal Izq</span>
      </div>
      <button class="btn-select-match" onclick="selectMatchForToday('FINAL_MATCH', 'FINAL_L', 'FINAL_R', 'GRAN FINAL DEL MUNDIAL')" title="Seleccionar la Gran Final">
        ⚔️ Jugar Gran Final
      </button>
      <div class="vs-tag-bracket">VS</div>
      <div class="bracket-slot" data-slot-id="FINAL_R">
        <span class="slot-placeholder">Ganador Semifinal Der</span>
      </div>
    </div>
  `;

  stageEl.appendChild(centerDiv);

  // Render Right Half
  const rightHalf = document.createElement('div');
  rightHalf.className = 'bracket-half right';

  roundsConfig.forEach((rnd, rIdx) => {
    const col = document.createElement('div');
    col.className = 'round-column';
    col.style.height = `${colHeight}px`;

    const title = document.createElement('div');
    title.className = 'round-title';
    title.textContent = `${rnd.name} (Der)`;
    col.appendChild(title);

    const matchupsContainer = document.createElement('div');
    matchupsContainer.className = 'matchups-container';

    for (let m = 0; m < rnd.matches; m++) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';
      const matchKey = `R_R${rIdx}_M${m}`;
      matchDiv.dataset.matchKey = matchKey;

      const slotAId = `${matchKey}_A`;
      const slotBId = `${matchKey}_B`;

      if (rnd.isInitial) {
        initialSlotsList.push(slotAId);
        initialSlotsList.push(slotBId);
      }

      // Progression calculation
      if (rIdx < roundsConfig.length - 1) {
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
        <div class="bracket-slot" data-slot-id="${slotAId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}A</span>
        </div>
        <button class="btn-select-match" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Der) - Duelo ${m + 1}')" title="Seleccionar para votar hoy">
          ⚔️ Jugar hoy
        </button>
        <div class="bracket-slot" data-slot-id="${slotBId}">
          <span class="slot-placeholder">${rnd.name} ${m + 1}B</span>
        </div>
      `;

      matchupsContainer.appendChild(matchDiv);
    }

    col.appendChild(matchupsContainer);
    rightHalf.appendChild(col);
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
    return;
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
  if (slotId === 'CHAMPION') return '👑 Gran Campeón';
  if (slotId === 'FINAL_L') return 'Ganador Semifinal Izq';
  if (slotId === 'FINAL_R') return 'Ganador Semifinal Der';

  const parts = slotId.split('_'); // ['L', 'R0', 'M0', 'A']
  if (parts.length >= 4) {
    const rIdx = parseInt(parts[1].replace('R', ''), 10);
    const mIdx = parseInt(parts[2].replace('M', ''), 10) + 1;
    const letter = parts[3];
    const names = ['32avos', '16avos', 'Octavos', 'Cuartos', 'Semis'];
    return `${names[rIdx] || 'Ronda'} ${mIdx}${letter}`;
  }
  return 'Vacío';
}

function highlightActiveMatchInBracket() {
  document.querySelectorAll('.matchup').forEach(m => m.classList.remove('active-in-duel'));
  if (!activeMatch) return;

  const mEl = document.querySelector(`.matchup[data-match-key="${activeMatch.matchKey}"]`);
  if (mEl) mEl.classList.add('active-in-duel');
}

// Drag from Slot
window.handleSlotDragStart = function (e, slotId) {
  const alf = bracketState[slotId];
  if (!alf) return;
  currentDragPayload = alf;
  e.dataTransfer.setData('text/plain', JSON.stringify(alf));
};

// ============================================================
// SIDEBAR CATALOG (SIN FOTOS, ULTRA RÁPIDO)
// ============================================================
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
    listEl.innerHTML = `<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">No se encontraron alfajores</div>`;
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
    hint.innerHTML = `👉 Hacé clic en cualquier casillero vacío para ubicar a <strong>${escapeHtml(selectedAlfajorForPlacement.name)}</strong>. <a href="javascript:clearPlacementSelection()" style="color: #854d0e; margin-left: 6px;">(Cancelar)</a>`;
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
  if (!confirm('¿Eliminar este alfajor personalizado?')) return;
  ALFAJORES_DATA = ALFAJORES_DATA.filter(a => a.id !== id);
  Object.keys(bracketState).forEach(slotId => {
    if (bracketState[slotId]?.id === id) delete bracketState[slotId];
  });

  saveToLocalStorage();
  sendServerAction('/api/alfajor/delete', { id });
  refreshAllViews();
};

// ============================================================
// ZOOM & VIEWPORT
// ============================================================
function setZoom(level) {
  zoomLevel = Math.max(0.35, Math.min(1.8, level));
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
    setZoom(Math.max(scale, 0.4));
  }
}

// ============================================================
// MODAL & QR
// ============================================================
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

// Confetti Effect
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#f59e0b', '#2563eb', '#16a34a', '#ec4899', '#8b5cf6', '#ef4444'];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: Math.random() * 9 + 4,
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

// Helpers
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

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  build64Bracket();
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

  // QR Modal Button
  const btnQR = document.getElementById('btn-open-qr');
  if (btnQR) btnQR.addEventListener('click', () => openQRModal());

  const modalQr = document.getElementById('qr-modal');
  if (modalQr) {
    modalQr.addEventListener('click', (e) => {
      if (e.target === modalQr) closeQRModal();
    });
  }

  // Auto-fill all 64 slots of 32avos
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
      sendServerAction('/api/bracket/fill-all', {});
      refreshAllViews();
      showToast('🎲 ¡Llave completada con los 64 alfajores!');
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

  // Add custom alfajor (Sin fotos)
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
