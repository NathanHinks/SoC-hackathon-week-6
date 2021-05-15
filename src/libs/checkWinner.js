import {possibleWins} from './gameVars';

const checkWinner = (boardArray) => {
  let currentWinner = null;

  possibleWins.forEach((win) => {
    const [a, b, c] = win;
    if (
      boardArray[a] !== null &&
      boardArray[a] === boardArray[b] &&
      boardArray[a] === boardArray[c]
    ) {
      currentWinner = boardArray[a];
    }
  });
  
  return currentWinner;
};

export default checkWinner
