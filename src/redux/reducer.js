import { startBoard } from '../libs/gameVars';
import {takeTurn, randomizeFirstPlayer} from './utils';

const initialState = {
    board: startBoard,
    isPlayerXTurn: randomizeFirstPlayer(),
    winner: null
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAKE_TURN':
        const updatedState = takeTurn(state, action.payload)
      return {
        ...state,
        ...updatedState,
        isPlayerXTurn: !state.isPlayerXTurn,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;