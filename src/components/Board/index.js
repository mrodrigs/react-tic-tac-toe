import Square from '../Square';

import './styles.css';

function Board({ onClick, positions }) {
  return (
    <div className="board-container">
      {positions.map((position, index) =>
        <Square key={index} onClick={() => onClick(index)} position={position} />
      )}
    </div>
  );
}

export default Board;
