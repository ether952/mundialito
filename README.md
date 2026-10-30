# 🏆 Mundial de Alfajores - Edición Oficina

Aplicación web interactiva para organizar el típico **Mundial de Alfajores** en la oficina, con memoria persistente, sincronización en tiempo real por WebSockets y soporte para celulares en la misma red Wi-Fi mediante código QR.

---

## 🚀 Características

- **Llave de 32 Alfajores:** Estructura completa desde 16avos hasta la Gran Final y Campeón 🏆.
- **Catálogo de 32 Alfajores Argentinos:** Todas las marcas clásicas (Havanna, Capitán del Espacio, Rasta, Guaymallén, Jorgito, Milka Oreo, Cachafaz, Fantoche, etc.) con sus fotos reales de packaging.
- **Buscador con Lupa 🔍:** Búsqueda instantánea en el catálogo lateral.
- **Armado Interactivo:** Hacé click en cualquier alfajor de la lista y luego en una casilla de la llave para ubicarlo (o usá el botón *🎲 Completar Llave*).
- **Avance en 1 Click:** Botón directo `➔` para pasar cualquier alfajor a la siguiente ronda.
- **Partido de Hoy & Votación en Vivo:**
  - Hacé click en `⚔️ Jugar hoy` en cualquier cruce de la llave.
  - Se abre el duelo con las fotos de ambos alfajores frente a frente.
  - Cada compañero vota desde su celular con el botón `❤️ Votar`.
  - El botón `🏁 Terminar y Pasar Ganador` contabiliza los votos y avanza automáticamente al ganador a la siguiente ronda en la llave.
- **Memoria Persistente:** Todo el estado se guarda en `data/mundial_state.json` y en `localStorage`, asegurando que no se pierda el progreso de los viernes anteriores.
- **Acceso para Celulares (QR):** Botón `📱 Conectar Celulares` con código QR y dirección IP local (`http://192.168.x.x:3000`) para que todos voten desde su celular sin instalar nada.

---

## 🛠️ Cómo Iniciar

### Opción 1: Acceso Directo (Recomendado en Windows)
Hacé doble click en el archivo:
```
iniciar_mundial.bat
```

### Opción 2: Terminal / Consola
1. Instalar dependencias (solo la primera vez):
```bash
npm install
```
2. Iniciar el servidor:
```bash
node server.js
```
3. Abrí en tu navegador:
- En esta PC: `http://localhost:3000`
- Desde celulares en la misma red Wi-Fi: `http://<TU_IP_LOCAL>:3000` (o escaneá el QR en pantalla).
