import React from 'react';
import { FaBasketballBall } from 'react-icons/fa'; // Example player icon

const Players = ({ player, dragHandleProps, isDragging }) => {
    return (
      <div
        className={`player ${isDragging ? 'dragging' : ''}`}
        style={{ padding: '10px', margin: '5px', backgroundColor: '#fff', textAlign: 'center' }}
        {...dragHandleProps}
      >
        <FaBasketballBall size={30} />
        <p>{player.name}</p>
      </div>
    );
  };
  
  export default Players