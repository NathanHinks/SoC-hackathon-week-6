export const takeTurn = (index) => ({
  type: 'TAKE_TURN',
  payload: index,
});

export const reset = () => ({
  type: 'RESET',
});
