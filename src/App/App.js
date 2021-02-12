
import "./App.css";
import React, {useState} from "react";
import Board from "../Board"

const startBoard = [null, null, null, null, null, null, null, null, null]

function App() {
  // nextPlayer state
  const [isPlayerXTurn, setPlayerXTurn] = useState(true);
  // board state
  const [board, setBoard] = useState(startBoard);

  // function that takes in index and chages content of square
  // takes in index that corresponds to which button (0 to 8)
  //this happens on button click
  function fillSquare(index) {
    // make a copy of board (index)
    const boardCopy = [...board];
    if (boardCopy[index] === null) {
    //fill with x or o
      if (isPlayerXTurn) {
        //if x's turn fill with "X"
        boardCopy[index] = "X"
      }
      else {
        //else if o's turn, fill with an "O"
        boardCopy[index] = "O"
        }
    }
    //else do nothing bc square is already filled

    // set board to that board copy
    setBoard(boardCopy);
    // then swap the player using state above
    setPlayerXTurn(!isPlayerXTurn)
  }

  
  return (
    //PROPS TO SEND = fillSquare, board
    <div className="App">
      <Board fillSquare = {fillSquare} board = {board}/>  
    </div>
  );
}

export default App;
