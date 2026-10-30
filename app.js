// 32 Argentine Alfajores Catalog with verified local image packshots
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

// Persistent Voter ID for this device
function getVoterId() {
  let id = localStorage.getItem('mundial_voter_id_v3');
  if (!id) {
    id = 'voter_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('mundial_voter_id_v3', id);
  }
  return id;
}
const myVoterId = getVoterId();

// Application State
let isServerConnected = false;
let socket = null;
let networkInfo = { ip: 'localhost', port: 3000, url: window.location.origin, qr: '' };
let connectedCount = 1;

let ALFAJORES_DATA = [...DEFAULT_ALFAJORES_32];
let bracketState = {};
let activeMatch = null; // { matchKey, slotA, slotB, label }
let votes = {}; // { [matchKey]: { [slotId]: [voterIds...] } }

let progressionMap = {};
let initialSlotsList = [];
let zoomLevel = 1.0;
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

// Fallback image handler
window.handleImageError = function (imgEl, codeText) {
  const fallback = document.createElement('div');
  fallback.className = imgEl.classList.contains('slot-thumb') ? 'slot-thumb-fallback' : 'alfajor-img-fallback';
  fallback.textContent = codeText || 'ALF';
  imgEl.parentNode.replaceChild(fallback, imgEl);
};

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
    pill.title = 'Sincronizado en tiempo real con la oficina';
  } else {
    pill.className = 'connection-pill';
    pill.innerHTML = `<span>🟡</span> <span>MODO LOCAL</span>`;
    pill.title = 'Servidor desconectado. Los cambios se guardan localmente.';
  }
}

function handleIncomingState(state, net, count) {
  if (net) networkInfo = net;
  if (count !== undefined) {
    connectedCount = count;
    updateConnectionBadge(isServerConnected);
  }

  if (state) {
    if (Array.isArray(state.alfajores) && state.alfajores.length > 0) {
      ALFAJORES_DATA = state.alfajores;
    }
    bracketState = state.bracketState || {};
    activeMatch = state.activeMatch || null;
    votes = state.votes || {};

    renderSidebar();
    renderActiveDuelPanel();
    updateAllSlotsDOM();
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem('mundial_bracket_state_32', JSON.stringify(bracketState));
    localStorage.setItem('mundial_alfajores_32', JSON.stringify(ALFAJORES_DATA));
    localStorage.setItem('mundial_active_match_32', JSON.stringify(activeMatch));
    localStorage.setItem('mundial_votes_32', JSON.stringify(votes));
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const defaultMap = new Map(DEFAULT_ALFAJORES_32.map(a => [a.id, a]));
    const savedAlf = localStorage.getItem('mundial_alfajores_32');
    if (savedAlf) {
      ALFAJORES_DATA = JSON.parse(savedAlf).map(alf => {
        if (defaultMap.has(alf.id)) return { ...alf, img: defaultMap.get(alf.id).img };
        return alf;
      });
    }

    const savedBracket = localStorage.getItem('mundial_bracket_state_32');
    if (savedBracket) bracketState = JSON.parse(savedBracket);

    const savedActive = localStorage.getItem('mundial_active_match_32');
    if (savedActive) activeMatch = JSON.parse(savedActive);

    const savedVotes = localStorage.getItem('mundial_votes_32');
    if (savedVotes) votes = JSON.parse(savedVotes);

    renderSidebar();
    renderActiveDuelPanel();
    updateAllSlotsDOM();
  } catch (e) {}
}

function sendServerAction(url, body) {
  if (isServerConnected) {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).catch(err => console.error(err));
  } else {
    saveToLocalStorage();
    renderActiveDuelPanel();
    updateAllSlotsDOM();
  }
}

// ============================================================
// PARTIDO DE HOY (ACTIVE DUEL PANEL)
// ============================================================
function renderActiveDuelPanel() {
  const panel = document.getElementById('active-duel-panel');
  if (!panel) return;

  if (!activeMatch) {
    panel.innerHTML = `
      <div class="duel-banner-empty">
        <span>⚔️ <strong>Partido de Hoy:</strong> Tocá el botón <strong>"⚔️ Jugar hoy"</strong> en cualquier cruce de la llave para abrir el duelo y empezar a votar.</span>
      </div>
    `;
    return;
  }

  const { matchKey, slotA, slotB, label } = activeMatch;
  const alfA = bracketState[slotA];
  const alfB = bracketState[slotB];

  const matchVotes = votes[matchKey] || {};
  const votesA = (matchVotes[slotA] || []).length;
  const votesB = (matchVotes[slotB] || []).length;
  const totalVotes = votesA + votesB;

  const pctA = totalVotes > 0 ? Math.round((votesA / totalVotes) * 100) : 50;
  const pctB = totalVotes > 0 ? (100 - pctA) : 50;

  const myVote = (matchVotes[slotA] || []).includes(myVoterId) ? slotA :
                 ((matchVotes[slotB] || []).includes(myVoterId) ? slotB : null);

  panel.innerHTML = `
    <div class="duel-banner-active">
      <div class="duel-header-line">
        <span class="duel-title">🔥 DUELO EN VIVO: ${escapeHtml(label || 'Partido')} (${totalVotes} ${totalVotes === 1 ? 'voto' : 'votos'})</span>
        <button class="btn-close-duel" onclick="closeActiveMatch()">✕ Cerrar Duelo</button>
      </div>

      <div class="duel-combatants-row">
        <!-- Combatant A -->
        <div class="duel-card ${myVote === slotA ? 'is-voted' : ''}">
          ${alfA ? `
            <img class="duel-img" src="${escapeHtml(alfA.img || 'images/alfajor-default.webp')}" alt="${escapeHtml(alfA.name)}" 
                 onerror="handleImageError(this, '${escapeHtml(alfA.code || 'ALF')}')" />
            <div class="duel-info">
              <div class="duel-name">${escapeHtml(alfA.name)}</div>
              <span class="duel-badge">${escapeHtml(alfA.badge || 'Alfajor')}</span>
              <button class="btn-duel-vote ${myVote === slotA ? 'voted' : ''}" onclick="submitDuelVote('${matchKey}', '${slotA}')">
                ${myVote === slotA ? '✓ Tu voto' : '❤️ Votar'} (${votesA} - ${pctA}%)
              </button>
            </div>
          ` : `
            <div style="color: #94a3b8; font-style: italic; font-size: 13px;">Casillero A vacío</div>
          `}
        </div>

        <!-- Middle Controls -->
        <div class="duel-middle">
          <div class="vs-circle">VS</div>
          <button class="btn-finish-duel" onclick="finishCurrentMatch('${matchKey}', '${slotA}', '${slotB}')">
            🏁 Terminar y Pasar Ganador
          </button>
        </div>

        <!-- Combatant B -->
        <div class="duel-card ${myVote === slotB ? 'is-voted' : ''}">
          ${alfB ? `
            <img class="duel-img" src="${escapeHtml(alfB.img || 'images/alfajor-default.webp')}" alt="${escapeHtml(alfB.name)}" 
                 onerror="handleImageError(this, '${escapeHtml(alfB.code || 'ALF')}')" />
            <div class="duel-info">
              <div class="duel-name">${escapeHtml(alfB.name)}</div>
              <span class="duel-badge">${escapeHtml(alfB.badge || 'Alfajor')}</span>
              <button class="btn-duel-vote ${myVote === slotB ? 'voted' : ''}" onclick="submitDuelVote('${matchKey}', '${slotB}')">
                ${myVote === slotB ? '✓ Tu voto' : '❤️ Votar'} (${votesB} - ${pctB}%)
              </button>
            </div>
          ` : `
            <div style="color: #94a3b8; font-style: italic; font-size: 13px;">Casillero B vacío</div>
          `}
        </div>
      </div>
    </div>
  `;
}

window.selectMatchForToday = function (matchKey, slotA, slotB, label) {
  const alfA = bracketState[slotA];
  const alfB = bracketState[slotB];

  if (!alfA || !alfB) {
    showToast('⚠️ Primero ubicá a los dos alfajores en este cruce para jugar el partido');
    return;
  }

  activeMatch = { matchKey, slotA, slotB, label };
  if (!votes[matchKey]) votes[matchKey] = {};

  if (isServerConnected) {
    sendServerAction('/api/active-match', activeMatch);
  } else {
    saveToLocalStorage();
  }

  renderActiveDuelPanel();
  highlightActiveMatchInBracket();
  showToast(`⚔️ ¡Partido seleccionado! Ya podés votar.`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.closeActiveMatch = function () {
  activeMatch = null;
  if (isServerConnected) {
    sendServerAction('/api/active-match', {});
  } else {
    saveToLocalStorage();
  }
  renderActiveDuelPanel();
  highlightActiveMatchInBracket();
};

window.submitDuelVote = function (matchKey, slotChosen) {
  if (!bracketState[slotChosen]) return;

  if (isServerConnected) {
    sendServerAction('/api/vote', { matchKey, slotChosen, voterId: myVoterId });
  } else {
    if (!votes[matchKey]) votes[matchKey] = {};
    Object.keys(votes[matchKey]).forEach(s => {
      votes[matchKey][s] = (votes[matchKey][s] || []).filter(id => id !== myVoterId);
    });
    if (!votes[matchKey][slotChosen]) votes[matchKey][slotChosen] = [];
    votes[matchKey][slotChosen].push(myVoterId);
    saveToLocalStorage();
    renderActiveDuelPanel();
  }
  showToast('🗳️ ¡Voto registrado en vivo!');
};

window.finishCurrentMatch = function (matchKey, slotA, slotB) {
  const alfA = bracketState[slotA];
  const alfB = bracketState[slotB];
  if (!alfA || !alfB) return;

  const matchVotes = votes[matchKey] || {};
  const votesA = (matchVotes[slotA] || []).length;
  const votesB = (matchVotes[slotB] || []).length;

  let winnerSlot = null;
  if (votesA > votesB) {
    winnerSlot = slotA;
  } else if (votesB > votesA) {
    winnerSlot = slotB;
  } else {
    // Tie
    const choice = confirm(`¡Empate (${votesA} a ${votesB})!\n\n¿Aceptás como ganador a "${alfA.name}"?\n(Si cancelás, gana "${alfB.name}")`);
    winnerSlot = choice ? slotA : slotB;
  }

  const winningAlfajor = bracketState[winnerSlot];
  const nextSlot = progressionMap[winnerSlot];

  if (nextSlot) {
    bracketState[nextSlot] = winningAlfajor;
    updateSlotDOM(nextSlot);
  }

  if (isServerConnected) {
    sendServerAction('/api/finish-match', { matchKey, winnerSlot });
  } else {
    activeMatch = null;
    saveToLocalStorage();
    renderActiveDuelPanel();
    highlightActiveMatchInBracket();
  }

  triggerConfetti();
  showToast(`🎉 ¡Ganó ${winningAlfajor.name} y avanzó en la llave! 🏆`);
};

function highlightActiveMatchInBracket() {
  document.querySelectorAll('.matchup').forEach(m => {
    if (activeMatch && m.dataset.matchKey === activeMatch.matchKey) {
      m.classList.add('active-in-duel');
    } else {
      m.classList.remove('active-in-duel');
    }
  });
}

// ============================================================
// BRACKET GENERATION (32 TEAMS)
// ============================================================
function build32Bracket() {
  const stageEl = document.getElementById('bracket-stage');
  if (!stageEl) return;
  stageEl.innerHTML = '';
  initialSlotsList = [];
  progressionMap = {};

  // Rounds for 32:
  // 16avos: 8 matches per side
  // Octavos: 4 matches per side
  // Cuartos: 2 matches per side
  // Semifinales: 1 match per side
  const roundsConfig = [
    { name: '16avos', matches: 8, isInitial: true },
    { name: 'Octavos', matches: 4, isInitial: false },
    { name: 'Cuartos', matches: 2, isInitial: false },
    { name: 'Semifinal', matches: 1, isInitial: false }
  ];

  const colHeight = 8 * 145;

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
        <button class="btn-select-match" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Izq) - Duelo ${m + 1}')" title="Seleccionar este partido para jugar y votar hoy">
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
    <div class="champion-box">
      <div class="trophy-badge">🏆</div>
      <div class="champion-label">★ CAMPEÓN DEL MUNDIAL ★</div>
      <div class="bracket-slot champion-slot" data-slot-id="CHAMPION">
        <span class="slot-placeholder">Ganador de la Final</span>
      </div>
    </div>

    <div class="final-box" data-match-key="FINAL">
      <div class="round-title" style="width: 100%; margin-bottom: 4px;">GRAN FINAL</div>
      <div class="bracket-slot" data-slot-id="FINAL_L">
        <span class="slot-placeholder">Finalista Izquierda</span>
      </div>

      <button class="btn-select-match" onclick="selectMatchForToday('FINAL', 'FINAL_L', 'FINAL_R', '★ LA GRAN FINAL ★')" style="padding: 4px; font-size: 11px;">
        ⚔️ Jugar Gran Final
      </button>

      <div class="bracket-slot" data-slot-id="FINAL_R">
        <span class="slot-placeholder">Finalista Derecha</span>
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
        <button class="btn-select-match" onclick="selectMatchForToday('${matchKey}', '${slotAId}', '${slotBId}', '${rnd.name} (Der) - Duelo ${m + 1}')" title="Seleccionar este partido para jugar y votar hoy">
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

  setupSlotListeners();
  updateAllSlotsDOM();
}

function updateSlotDOM(slotId) {
  const slotEl = document.querySelector(`.bracket-slot[data-slot-id="${slotId}"]`);
  if (!slotEl) return;

  const alfajor = bracketState[slotId];

  if (alfajor) {
    slotEl.classList.add('filled');
    const nextSlot = progressionMap[slotId];
    const canAdvance = !!nextSlot;
    const fallbackCode = alfajor.code || alfajor.name.substring(0, 3).toUpperCase();

    slotEl.innerHTML = `
      <div class="slot-content" draggable="true" data-slot-id="${slotId}">
        <img class="slot-thumb" src="${escapeHtml(alfajor.img || 'images/alfajor-default.webp')}" alt="${escapeHtml(alfajor.name)}" 
             onerror="handleImageError(this, '${escapeHtml(fallbackCode)}')" />
        <div class="slot-title-box">
          <div class="slot-name">${escapeHtml(alfajor.name)}</div>
          <div class="slot-sub">${escapeHtml(alfajor.badge || '')}</div>
        </div>
        <div class="slot-controls">
          ${canAdvance ? `<button class="btn-action btn-advance" title="Avanzar 1 ronda" onclick="advanceSlot('${slotId}', event)">➔</button>` : ''}
          <button class="btn-action" title="Quitar de casilla" onclick="clearSlot('${slotId}', event)">✕</button>
        </div>
      </div>
    `;

    const contentEl = slotEl.querySelector('.slot-content');
    contentEl.addEventListener('dragstart', (e) => {
      currentDragPayload = { source: 'slot', sourceSlotId: slotId, alfajor: alfajor };
      e.dataTransfer.setData('application/json', JSON.stringify(alfajor));
    });

    contentEl.addEventListener('dragend', () => {
      currentDragPayload = null;
    });

  } else {
    slotEl.classList.remove('filled');
    const placeholders = {
      'CHAMPION': '🏆 Gran Campeón',
      'FINAL_L': 'Finalista Izquierda',
      'FINAL_R': 'Finalista Derecha'
    };
    const placeholder = placeholders[slotId] || 'Casilla vacía';
    slotEl.innerHTML = `<span class="slot-placeholder">${placeholder}</span>`;
  }
}

function updateAllSlotsDOM() {
  document.querySelectorAll('.bracket-slot').forEach(slot => {
    updateSlotDOM(slot.dataset.slotId);
  });
  highlightActiveMatchInBracket();
}

window.advanceSlot = function (slotId, e) {
  if (e) e.stopPropagation();
  const current = bracketState[slotId];
  if (!current) return;

  const nextSlot = progressionMap[slotId];
  if (!nextSlot) {
    showToast(`🏆 ¡${current.name} ya es el Campeón del Mundial!`);
    return;
  }

  bracketState[nextSlot] = current;
  updateSlotDOM(nextSlot);

  if (isServerConnected) {
    sendServerAction('/api/bracket/advance', { slotId });
  } else {
    saveToLocalStorage();
  }

  if (nextSlot === 'CHAMPION') {
    showToast(`🎉 ¡${current.name} ES EL CAMPEÓN DEL MUNDIAL! 🏆`);
    triggerConfetti();
  } else {
    showToast(`¡${current.name} avanzó a la siguiente ronda!`);
  }
};

window.clearSlot = function (slotId, e) {
  if (e) e.stopPropagation();
  delete bracketState[slotId];
  updateSlotDOM(slotId);

  if (isServerConnected) {
    sendServerAction('/api/bracket/slot', { slotId, alfajor: null });
  } else {
    saveToLocalStorage();
  }

  renderSidebar();
  renderActiveDuelPanel();
};

function setupSlotListeners() {
  const allSlots = document.querySelectorAll('.bracket-slot');
  allSlots.forEach(slot => {
    const slotId = slot.dataset.slotId;

    // Click slot to place selected alfajor
    slot.addEventListener('click', () => {
      if (selectedAlfajorForPlacement) {
        bracketState[slotId] = selectedAlfajorForPlacement;
        updateSlotDOM(slotId);

        if (isServerConnected) {
          sendServerAction('/api/bracket/slot', { slotId, alfajor: selectedAlfajorForPlacement });
        } else {
          saveToLocalStorage();
        }

        showToast(`Ubicado: ${selectedAlfajorForPlacement.name}`);
        selectedAlfajorForPlacement = null;
        highlightAwaitingSlots(false);
        renderSidebar();
        renderActiveDuelPanel();
      }
    });

    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('awaiting-placement');
    });

    slot.addEventListener('dragleave', () => {
      if (!selectedAlfajorForPlacement) slot.classList.remove('awaiting-placement');
    });

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('awaiting-placement');

      let alfajor = currentDragPayload ? currentDragPayload.alfajor : null;
      if (!alfajor) {
        try {
          const raw = e.dataTransfer.getData('application/json');
          alfajor = JSON.parse(raw);
        } catch (err) {}
      }

      if (!alfajor) return;

      bracketState[slotId] = alfajor;
      updateSlotDOM(slotId);

      if (isServerConnected) {
        sendServerAction('/api/bracket/slot', { slotId, alfajor });
      } else {
        saveToLocalStorage();
      }

      renderSidebar();
      renderActiveDuelPanel();
      showToast(`Ubicado: ${alfajor.name}`);
    });
  });
}

function highlightAwaitingSlots(active) {
  document.querySelectorAll('.bracket-slot').forEach(slot => {
    if (active) slot.classList.add('awaiting-placement');
    else slot.classList.remove('awaiting-placement');
  });

  const hint = document.getElementById('selection-hint');
  if (hint) {
    if (active && selectedAlfajorForPlacement) {
      hint.textContent = `👉 Ubicando "${selectedAlfajorForPlacement.name}": hacé click en un casillero de la llave`;
      hint.classList.add('active');
    } else {
      hint.classList.remove('active');
    }
  }
}

// ============================================================
// SIDEBAR (ALFAJORES LIST WITH LUPA)
// ============================================================
function renderSidebar() {
  const listEl = document.getElementById('alfajores-list');
  if (!listEl) return;

  const searchInput = document.getElementById('search-input');
  const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

  listEl.innerHTML = '';

  const filtered = ALFAJORES_DATA.filter(alf => {
    return !searchVal || alf.name.toLowerCase().includes(searchVal) || alf.desc.toLowerCase().includes(searchVal);
  });

  const countBadge = document.getElementById('count-badge');
  if (countBadge) countBadge.textContent = filtered.length;

  const usedIds = new Set(Object.values(bracketState).map(a => a?.id).filter(Boolean));

  filtered.forEach(alf => {
    const item = document.createElement('div');
    item.className = 'alfajor-item';
    if (usedIds.has(alf.id)) item.classList.add('used');
    if (selectedAlfajorForPlacement && selectedAlfajorForPlacement.id === alf.id) {
      item.classList.add('selected-for-place');
    }

    item.setAttribute('draggable', 'true');
    const fallbackCode = alf.code || alf.name.substring(0, 3).toUpperCase();

    item.innerHTML = `
      <img class="alfajor-img-thumb" src="${escapeHtml(alf.img || 'images/alfajor-default.webp')}" alt="${escapeHtml(alf.name)}" 
           onerror="handleImageError(this, '${escapeHtml(fallbackCode)}')" />
      <div class="alfajor-info">
        <div class="alfajor-name">${escapeHtml(alf.name)}</div>
        <div class="alfajor-desc">${escapeHtml(alf.desc)}</div>
      </div>
      <span class="alfajor-badge">${escapeHtml(alf.badge)}</span>
      <button class="btn-delete-alfajor" title="Quitar alfajor" onclick="deleteAlfajor('${escapeHtml(alf.id)}', event)">✕</button>
    `;

    // Click to select & mark on bracket
    item.addEventListener('click', () => {
      if (selectedAlfajorForPlacement && selectedAlfajorForPlacement.id === alf.id) {
        selectedAlfajorForPlacement = null;
        highlightAwaitingSlots(false);
      } else {
        selectedAlfajorForPlacement = alf;
        highlightAwaitingSlots(true);
        showToast(`"${alf.name}" seleccionado. Hacé click en cualquier casillero de la llave para ubicarlo.`);
      }
      renderSidebar();
    });

    item.addEventListener('dragstart', (e) => {
      currentDragPayload = { source: 'sidebar', alfajor: alf };
      e.dataTransfer.setData('application/json', JSON.stringify(alf));
    });

    item.addEventListener('dragend', () => {
      currentDragPayload = null;
    });

    listEl.appendChild(item);
  });
}

window.deleteAlfajor = function (id, e) {
  if (e) e.stopPropagation();
  const alf = ALFAJORES_DATA.find(a => a.id === id);
  if (!confirm(`¿Quitar "${alf ? alf.name : 'este alfajor'}" de la lista?`)) return;

  if (isServerConnected) {
    sendServerAction('/api/alfajor/delete', { id });
  } else {
    ALFAJORES_DATA = ALFAJORES_DATA.filter(a => a.id !== id);
    Object.keys(bracketState).forEach(slotId => {
      if (bracketState[slotId]?.id === id) delete bracketState[slotId];
    });
    saveToLocalStorage();
    renderSidebar();
    updateAllSlotsDOM();
  }
};

// ============================================================
// ZOOM & FIT
// ============================================================
function setZoom(newZoom) {
  zoomLevel = Math.max(0.35, Math.min(1.8, newZoom));
  const canvas = document.getElementById('bracket-canvas');
  if (canvas) canvas.style.transform = `scale(${zoomLevel})`;
  const zoomText = document.getElementById('zoom-text');
  if (zoomText) zoomText.textContent = `${Math.round(zoomLevel * 100)}%`;
}

function fitToScreen() {
  const viewport = document.getElementById('bracket-viewport');
  const stage = document.getElementById('bracket-stage');
  if (!viewport || !stage) return;

  const vpW = viewport.clientWidth - 40;
  const stW = stage.scrollWidth;

  if (stW > 0) {
    const scale = Math.min(vpW / stW, 1.0);
    setZoom(scale);
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }
}

// ============================================================
// QR MODAL
// ============================================================
function openQRModal() {
  const modal = document.getElementById('qr-modal');
  if (!modal) return;

  const qrImg = document.getElementById('qr-code-img');
  const urlBox = document.getElementById('qr-url-text');
  const accessUrl = networkInfo.url || `http://${networkInfo.ip || 'localhost'}:${networkInfo.port || 3000}`;

  if (urlBox) urlBox.textContent = accessUrl;
  if (qrImg && networkInfo.qr) qrImg.src = networkInfo.qr;

  modal.classList.add('active');
}

function closeQRModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('active');
}

window.copyOfficeLink = function () {
  const url = networkInfo.url || `http://${networkInfo.ip || 'localhost'}:${networkInfo.port || 3000}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast('📋 ¡Enlace copiado al portapapeles!');
  }).catch(() => {
    showToast('Enlace: ' + url);
  });
};

// ============================================================
// CONFETTI
// ============================================================
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#f59e0b', '#2563eb', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 3,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.alpha -= p.decay;
      if (p.alpha > 0) {
        alive = true;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });

    if (alive) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(frame);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================================
// INITIALIZATION
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  // Zoom Controls
  const zIn = document.getElementById('btn-zoom-in');
  if (zIn) zIn.addEventListener('click', () => setZoom(zoomLevel + 0.1));
  const zOut = document.getElementById('btn-zoom-out');
  if (zOut) zOut.addEventListener('click', () => setZoom(zoomLevel - 0.1));
  const zReset = document.getElementById('btn-zoom-reset');
  if (zReset) zReset.addEventListener('click', () => setZoom(1.0));
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

  // Auto-fill all 32 slots
  const btnFill = document.getElementById('btn-fill-all');
  if (btnFill) {
    btnFill.addEventListener('click', () => {
      if (isServerConnected) {
        sendServerAction('/api/bracket/fill-all', {});
      } else {
        const available = ALFAJORES_DATA.filter(a => !Object.values(bracketState).some(x => x?.id === a.id));
        let availIdx = 0;
        initialSlotsList.forEach(slotId => {
          if (!bracketState[slotId] && available[availIdx]) {
            bracketState[slotId] = available[availIdx];
            availIdx++;
          }
        });
        saveToLocalStorage();
        updateAllSlotsDOM();
        renderSidebar();
      }
      showToast('🎲 ¡Llave completada con los 32 alfajores!');
    });
  }

  // Clear Bracket
  const btnClear = document.getElementById('btn-clear');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('¿Vaciar toda la llave del torneo?')) {
        if (isServerConnected) {
          sendServerAction('/api/bracket/reset', {});
        } else {
          bracketState = {};
          activeMatch = null;
          votes = {};
          saveToLocalStorage();
          updateAllSlotsDOM();
          renderActiveDuelPanel();
          renderSidebar();
        }
        showToast('Llave reiniciada');
      }
    });
  }

  // Print
  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) btnPrint.addEventListener('click', () => window.print());

  // Search input (Lupa)
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderSidebar());
  }

  // Custom alfajor form
  const customForm = document.getElementById('custom-form');
  if (customForm) {
    customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputName = document.getElementById('custom-name');
      const inputImg = document.getElementById('custom-img');
      const name = inputName ? inputName.value.trim() : '';
      const img = inputImg ? inputImg.value.trim() : '';
      if (!name) return;

      if (isServerConnected) {
        sendServerAction('/api/alfajor/add', { name, img });
      } else {
        const newAlf = {
          id: 'custom-' + Date.now(),
          name: name.toUpperCase(),
          desc: 'Alfajor personalizado',
          cat: 'pedidos',
          badge: 'Custom',
          code: name.substring(0, 3).toUpperCase(),
          img: img || 'images/alfajor-default.webp'
        };
        ALFAJORES_DATA.unshift(newAlf);
        saveToLocalStorage();
        renderSidebar();
      }

      if (inputName) inputName.value = '';
      if (inputImg) inputImg.value = '';
      showToast(`Alfajor "${name}" agregado`);
    });
  }

  // Render initial 32 bracket
  build32Bracket();
  renderSidebar();
  renderActiveDuelPanel();

  // Connect to server
  initWebSocket();

  // Initial fit
  setTimeout(fitToScreen, 200);
});
