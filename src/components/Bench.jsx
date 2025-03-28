// src/components/Bench.js
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import Player from './Player';

const Bench = ({ players }) => {
  return (
    <div className="bench" style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      {players.map((player, index) => (
        <Draggable key={player.id} draggableId={player.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{ ...provided.draggableProps.style, margin: '5px' }}
            >
              <Player player={player} dragHandleProps={provided.dragHandleProps} isDragging={snapshot.isDragging} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Bench;