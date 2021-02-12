
import "./App.css";
import React, {useState} from "react";
import Board from "../Board"

function App() {
  // nextPlayer state
  // board state

  // function that takes in index and chages content of square
   // takes in index that corresponds to which button (0 to 8)
   // make a copy of board (index)
   // access that particular square using the array 
   // if already filled, do nothing, else just fill with x or o
   // set board to that board copy 
   // then swap the player using state above
  
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
