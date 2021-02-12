import './App.css';
import React, { useState } from 'react';
import Board from '../Board';

const startBoard = [ null, null, null, null, null, null, null, null, null ];

function App() {
	const [ isPlayerXTurn, setPlayerXTurn ] = useState(true);
	const [ board, setBoard ] = useState(startBoard);
  const winner = checkWinner(board);

	function fillSquare(index) {
		const boardCopy = [ ...board ];

		if (winner === null && boardCopy[index] === null) {
			isPlayerXTurn ? (boardCopy[index] = 'X') : (boardCopy[index] = 'O');
		}

		setBoard(boardCopy);
		setPlayerXTurn(!isPlayerXTurn);
	}

	function checkWinner(boardArray) {
		const possibleWins = [
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 4, 8 ],
			[ 2, 4, 6 ],
		];
		let currentWinner = null;

		possibleWins.forEach((win) => {
			const [ a, b, c ] = win;
			if (boardArray[a] !== null && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
				currentWinner = boardArray[a];
			}
		});
    //because can't return in forEach
		return currentWinner;
	}

	function handleReset() {
		const resetBoard = [ ...startBoard ];
		setBoard(resetBoard);
	}

	return (
		<div className='App'>
			<Board fillSquare={fillSquare} board={board} handleReset={handleReset} winner={winner} isPlayerXTurn={isPlayerXTurn} />
		</div>
	);
}

export default App;
