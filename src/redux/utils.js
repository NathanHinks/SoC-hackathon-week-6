import checkWinner from '../libs/checkWinner';
import fillSquare from '../libs/fillSquare';

export const randomizeFirstPlayer = () => Math.random() >= 0.5;

export const takeTurn = (state, index) => {
  const newBoard = fillSquare(state, index);
  const winner = checkWinner(newBoard);

  return {
    board: newBoard,
    winner: winner,
  };
};
