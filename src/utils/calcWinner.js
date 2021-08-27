const calculateWinner = (positions) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [6, 7, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
  ];

  let winner = null;

  lines.forEach(line => {
    if (!winner) {
      const [a, b, c] = line;

      if (positions[a] &&
          positions[a] === positions[b] &&
          positions[a] === positions[c]
        ) {
        winner = positions[a];
      }
    }
  });

  console.log(winner)

  return winner;
}


export default calculateWinner;
