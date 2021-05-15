
const fillSquare = (currentState, index) => {
  const { board, winner, isPlayerXTurn } = currentState;

  const boardCopy = [...board];

  if (winner === null && boardCopy[index] === null) {
    isPlayerXTurn ? (boardCopy[index] = 'X') : (boardCopy[index] = 'O');
  }

  return boardCopy;
};

export default fillSquare