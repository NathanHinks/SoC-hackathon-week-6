import React from 'react';
import Square from '../Square';

//PROPS this needs fillsquares, board
function Board({ fillSquare, board, winner, isPlayerXTurn, handleReset }) {
	return (
		<div className='board-display-container'>
			{' '}
			<div className='current-player'>
                {winner ?
                    `Winner is: ${winner}` :
                    `Next Player: ${isPlayerXTurn ? 'X' : 'O'}`}
			</div>
			<div className='board'>
				{board.map((item, index) => <Square index={index} fillSquare={fillSquare} key={index} item={item} />)}
			</div>
			<button className='reset-btn' onClick={handleReset}>
				Reset
			</button>
		</div>
	);
}

export default Board;
