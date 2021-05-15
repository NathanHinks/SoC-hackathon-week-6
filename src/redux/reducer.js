import { getInitialState, takeTurn } from './utils';

const initialState = getInitialState();

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAKE_TURN':
      const updatedState = takeTurn(state, action.payload);

      return {
        ...state,
        ...updatedState,
        isPlayerXTurn: !state.isPlayerXTurn,
      };
    case 'RESET':
      return getInitialState();
    default:
      return state;
  }
};

export default gameReducer;
