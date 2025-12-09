import React from 'react';

export default function BetLogModal({ isOpen, onClose, onSave, betData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = React.useState({
    stake: '',
    odds: '',
    result: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Log Your Bet</h3>
        <input type="number" name="stake" placeholder="Stake" onChange={handleChange} />
        <input type="text" name="odds" placeholder="Odds Taken" onChange={handleChange} />
        <select name="result" onChange={handleChange}>
          <option value="">Result</option>
          <option value="win">Win</option>
          <option value="loss">Loss</option>
          <option value="push">Push</option>
        </select>
        <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
        <button onClick={handleSubmit}>Save Bet</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}