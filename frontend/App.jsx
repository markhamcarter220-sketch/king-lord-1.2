import React from 'react';
import BetCard from './components/BetCard';

function App() {
  const mockGames = [
    { name: "Team A vs Team B" },
    { name: "Team C vs Team D" }
  ];

  return (
    <div className="app">
      <h1>Better Bets - KL1.2</h1>
      {mockGames.map((game, idx) => (
        <BetCard key={idx} game={game} />
      ))}
    </div>
  );
}

export default App;