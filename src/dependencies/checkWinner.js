import {possibleWins} from './gameVars';

const checkWinner = (boardArray) => {
  let newWinner = null;

  possibleWins.forEach((win) => {
    const [a, b, c] = win;
    if (
      boardArray[a] !== null &&
      boardArray[a] === boardArray[b] &&
      boardArray[a] === boardArray[c]
    ) {
      newWinner = boardArray[a];
    }
  });
  
  return newWinner;
};

export default checkWinner
