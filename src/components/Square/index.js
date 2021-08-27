import './styles.css';

function Square({ onClick, position }) {
  return (
    <div className="square-container" onClick={onClick}>
      {position}
    </div>
  );
}

export default Square;
