import React, { useState } from 'react';
import BetLogModal from './BetLogModal';

export default function BetCard({ game }) {
  const [stake, setStake] = useState(localStorage.getItem('stake') || '');
  const [showModal, setShowModal] = useState(false);

  const handleStakeChange = (e) => {
    setStake(e.target.value);
    localStorage.setItem('stake', e.target.value);
  };

  const handleSaveBet = (data) => {
    // You'd POST this to the backend in real usage
    console.log("Saved bet:", data);
  };

  return (
    <div className="bet-card">
      <h4>{game.name}</h4>
      <input
        type="number"
        placeholder="Stake"
        value={stake}
        onChange={handleStakeChange}
      />
      <button onClick={() => setShowModal(true)}>Log Bet</button>
      <BetLogModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveBet}
        betData={{ game }}
      />
    </div>
  );
}