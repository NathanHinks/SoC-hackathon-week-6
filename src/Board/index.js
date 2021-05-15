import React from 'react';
import Square from '../Square';

import {useSelector} from "react-redux"

import './board.css';
import ResetBtn from '../ResetBtn';

//{ fillSquare, board, winner, isPlayerXTurn, handleReset }
function Board() {
	const {board, isPlayerXTurn, winner} = useSelector(state => state);
	const fillSquare = () => console.log("hi")

	console.log(board)
	return (
		<div className='board-display-container'>
			<div className='current-player'>
                {winner ?
                    `Winner is: ${winner}` :
                    `Next Player: ${isPlayerXTurn ? 'X' : 'O'}`}
			</div>
			<div className='board'>
				{board.map((item, index) => <Square index={index} key={index} item={item} />)}
			</div>
			<ResetBtn/>
		</div>
	);
}

export default Board;
