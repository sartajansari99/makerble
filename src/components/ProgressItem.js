import React from 'react';
import './Styles/ProgressBoard.css'; // Add styles for this component

function ProgressItem({ item }) {
  return (
    <div className="progress-item">
      <div className="progress-left">
        <img src="https://via.placeholder.com/40" alt="icon" className="icon" />
      </div>
      <div className="progress-details">
        <p>{item.text}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${item.value * 10}%`, backgroundColor: item.color }}></div>
        </div>
      </div>
      <button className="plus-button">+</button>
    </div>
  );
}

export default ProgressItem;
