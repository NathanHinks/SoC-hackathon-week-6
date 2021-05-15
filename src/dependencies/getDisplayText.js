const getDisplayText = (currentState) => {
    const { board, winner, isPlayerXTurn } = currentState
    const remainingSquares = board.filter(content => content === null);
    
    if(winner) return `Winner is: ${winner}!`
    
    else if (remainingSquares.length === 0) return 'It\'s a draw!';

    else return `Next Player: ${isPlayerXTurn ? 'X' : 'O'}`
}

export default getDisplayText