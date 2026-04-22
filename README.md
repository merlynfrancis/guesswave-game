<div align="center">

# 🌊 Guess Wave

### _Ride the curve. Cash out before it crashes._

A real-time multiplayer multiplier-betting game where nerve meets numbers.
Place your points, pick your multiplier, and watch the wave rise — if you called it right, you win big. If you didn't, well… the wave already knew.

[![Live Demo](https://img.shields.io/badge/🎮_Play_Now-guesswave.netlify.app-FF3366?style=for-the-badge)](https://guesswave.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

</div>

---

## 🎯 The Idea

Every round, five players — you and four AI opponents — place a bet:

- 💰 **Points** — how much you're risking
- ✖️ **Multiplier** — your prediction of where the wave will peak

Then the wave starts climbing. A curve sweeps across the chart, slowly building, tension tightening. It lands on a final number — the **actual** multiplier of the round.

- If your multiplier is **at or below** the wave's peak → 🟢 **You win** `points × multiplier`
- If you got greedy and overshot → 🔴 **You lose** everything you wagered

Rank climbs. Chat lights up. The next round starts. **Do it again.**

---

## ✨ Features

| | |
|---|---|
| 🎲 **Betting Engine** | Configure your stake and multiplier before each round |
| 📈 **Live Wave Chart** | Smooth, animated multiplier curve rendered with Chart.js / Recharts |
| 🤖 **CPU Opponents** | 4 AI players with their own betting strategies to keep the board interesting |
| 🏆 **Live Ranking** | Top-5 leaderboard updates in real time |
| 💬 **Realtime Chat** | WebSocket-powered messaging with other players |
| ⚡ **Speed Control** | Rip through rounds at 1x → 6x speed |
| ⏱️ **Round Timer** | See how long your session has been running |
| 🎨 **Themed UI** | Dark-mode-first, gradient-accented, mobile-friendly design |

---

## 🧪 How to Play

```
1. Enter your name and hit "Accept"
2. Set your POINTS (how much to bet this round)
3. Set your MULTIPLIER (your prediction — be bold, but not reckless)
4. Hit START and watch the wave rise
5. Compare your multiplier to the final result:
      your_multiplier ≤ final  →  +  (points × multiplier)
      your_multiplier >  final  →  −  points
6. Climb the leaderboard. Talk trash in chat. Repeat.
```

> 🧠 **Strategy tip:** A low multiplier is nearly guaranteed but pays crumbs. A high multiplier is a jackpot — if the wave reaches that far. Find your risk threshold.

---

## 🛠️ Built With

<div align="center">

| Category | Stack |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **UI** | React 18 |
| **Styling** | SCSS Modules + CSS Variables |
| **Charts** | Chart.js 4 · react-chartjs-2 · Recharts |
| **Realtime** | WebSocket (`ws`) + Socket.IO Client |
| **Icons** | FontAwesome · React Icons |
| **Hosting** | Netlify |

</div>

---

## 📁 Project Structure

```
guesswave/
├── public/                     Static assets
└── src/
    ├── components/             UI building blocks
    │   ├── Game.tsx            Main orchestrator — round logic, state glue
    │   ├── CurrentRound.tsx    Live scoreboard of this round's bets
    │   ├── MultiplierChart.tsx Animated wave curve (the heart of the game)
    │   ├── SpeedControl.tsx    1x — 6x tempo slider
    │   ├── Welcome.tsx         Name-entry gate
    │   ├── Chat.tsx            Realtime messaging panel
    │   ├── Ranking.tsx         Top-5 leaderboard
    │   └── UserInfo.tsx        Player info & total points
    ├── context/
    │   └── GameContext.tsx     Global game state + WebSocket bridge
    ├── hooks/
    │   └── useWebSocket.ts     Custom hook for realtime connection
    ├── styles/
    │   ├── globals.scss        Global resets & typography
    │   ├── variables.scss      Color palette & design tokens
    │   └── components/         Per-component SCSS modules
    └── pages/                  Next.js routes
```

---

## 🚀 Running Locally

**Prerequisites:** Node.js 18+ and npm / yarn / pnpm

```bash
# 1. Clone the repo
git clone https://github.com/merlynfrancis/guesswave-game.git
cd guesswave-game

# 2. Install dependencies
npm install

# 3. Fire up the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — and you're on the wave. 🌊

### Other commands

```bash
npm run build     # Production build
npm run start     # Run the production build
npm run lint      # Lint the codebase
```

---

## 🌐 Deployment

The game is live on **Netlify** at [guesswave.netlify.app](https://guesswave.netlify.app/).

To deploy your own fork:

1. Push your fork to GitHub
2. Connect the repo to Netlify / Vercel
3. Build command: `npm run build` · Publish directory: `.next` (or use the Next.js Netlify plugin)

---

## 🤝 Contributing

Pull requests welcome. If it's a bigger change, open an issue first so we can talk about the direction.

```bash
# Standard flow
git checkout -b feature/cool-new-thing
git commit -m "feat: add cool new thing"
git push origin feature/cool-new-thing
# then open a PR on GitHub
```

---

<div align="center">

### Made with 💜 and a lot of math by [Merlyn Francis](https://github.com/merlynfrancis)

_If this project made you smile — or made you rage-quit — drop a ⭐ on the repo._

</div>
