import checkWinner from '../dependencies/checkWinner';
import fillSquare from '../dependencies/fillSquare';
import { startBoard } from '../dependencies/gameVars';

const randomizeFirstPlayer = () => Math.random() >= 0.5;

export const getInitialState = () => ({
  board: startBoard,
  isPlayerXTurn: randomizeFirstPlayer(),
  winner: null
})

export const takeTurn = (state, index) => {
  const newBoard = fillSquare(state, index);
  const winner = checkWinner(newBoard);

  return {
    board: newBoard,
    winner: winner,
  };
};
