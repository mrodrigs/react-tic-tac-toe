import { useState } from 'react';
import './styles.css';

import Board from './components/Board';

import calculateWinner from './utils/calcWinner';

function App() {
  const [positions, setPositions] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (!positions[index] && !winner) {
      const newPositions = [...positions];

      newPositions[index] = nextPlayer;

      setPositions(newPositions);

      const newWinner = calculateWinner(newPositions);

      if (newWinner) {
        setWinner(newWinner);
      } else {
        setNextPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  }

  const handleReset = () => {
    setWinner(null);
    setPositions(Array(9).fill(null))
    setNextPlayer('X');
  }

  return (
    <div className="container">
      {winner && <span>Winner: {winner}</span>}
      <button onClick={handleReset}>Reset</button>
      <Board positions={positions} onClick={handleSquareClick} />
    </div>
  );
}

export default App;
