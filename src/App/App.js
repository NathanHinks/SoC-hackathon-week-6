import './App.css';
import React, { useState } from 'react';
import Board from '../Board';

const startBoard = [ null, null, null, null, null, null, null, null, null ];

function App() {
	// nextPlayer state
	const [ isPlayerXTurn, setPlayerXTurn ] = useState(true);
	// board state
  const [ board, setBoard ] = useState(startBoard);
  const [ winnerDisplay, setWinnerDisplay] = useState("")
  
	//winner variable - reset each time someone plays
	// function that takes in index and chages content of square
	// takes in index that corresponds to which button (0 to 8)
	//this happens on button click
  function fillSquare(index) {
    
    const winner = checkWinner(board);
    console.log(winner)
		// make a copy of board (index)
		const boardCopy = [ ...board ];
		//check for winner and if board square is empty
    if (winner === null || boardCopy[index] === null) {
			//fill with x or o
			if (isPlayerXTurn) {
				//if x's turn fill with "X"
				boardCopy[index] = 'X';
      }
      
			else {
				//else if o's turn, fill with an "O"
				boardCopy[index] = 'O';
			}
    }
		//if winner
    if (winner !== null) {
      setWinnerDisplay("help") //need to appear when the person actually wins
      return;
    }

		// set board to that board copy
		setBoard(boardCopy);
		// STOP PLAY
		//}
		// then swap the player using state above
		setPlayerXTurn(!isPlayerXTurn);
	}

	//GET WINNNER

	//takes in board array
  function checkWinner(boardArray) {
		//array of possible wins each win will be an array eg: [1, 2, 3]
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
		//loop over that array
		//for each possible win
		// [1, 2, 3]
		// wins.forEach(win => )
		possibleWins.forEach((win) => {
			// destructure array
			//const [a, b, c] = win
			const [ a, b, c ] = win;
			//if statement to check if boardArray indexes for a, b and c are the same. eg all "X"
			//if boardArray[a] !== null
			// and boardArray[a] === b and c
			//if it is, return the winner
			if (boardArray[a] !== null && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
        currentWinner = boardArray[a];
        // setWinnerDisplay("help")
			}
    })
    
    return currentWinner;
	}

	return (
		//PROPS TO SEND = fillSquare, board
		<div className='App'>
			<Board fillSquare={fillSquare} winnerDisplay = {winnerDisplay} board={board}/>
		</div>
	);
}

export default App;
