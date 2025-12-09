# 🧠 KingLord 1.2 – BetTracker+

This build introduces full **stake input** persistence and a **bet logging modal** for user-side interaction.

---

## ✅ Features
- Stake input field per bet card (persists via localStorage)
- Bet logging modal (stake, odds, result, notes)
- `/logbet` API endpoint (saves to MongoDB)
- Clean React components in dark theme
- Backend server ready for Render deploy

---

## 🔧 Deployment Instructions

### Backend (Render)
- Root directory: `backend`
- Entry point: `server.js`
- Required environment variables:
  - `PORT=3001`
  - `MONGO_URI=your_mongo_connection_string`

> ✅ Render auto-deploy supported via `render.yaml` (if added)

### Frontend (Vercel)
- Root directory: `frontend`
- Runs `vite build`
- Uses:
  - `VITE_BACKEND_URL=https://your-backend.onrender.com`

---

## 📁 Project Structure
```
KingLord1.2/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
├── frontend/
│   ├── index.html
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
│       ├── BetCard.jsx
│       └── BetLogModal.jsx
└── README.md
```

---

UNAI-integrated · Zero-edit deploy certified · MVP milestone build