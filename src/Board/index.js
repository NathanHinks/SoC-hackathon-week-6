import React, {useState} from "react";
import Square from "../Square";

//PROPS this needs fillsquares, board
function Board({fillSquare, board, winnerDisplay}) {
    // MAKE 9 squares by mapping over board
        //each squares PROPS: fillsquares, key(so React doesn't shout at us), index
    return <div className="board-display-container"> <div className = "current-player"> 
        {winnerDisplay}
        </div>
            <div className ="board">
            {board.map((item, index) => <Square index = {index} fillSquare={fillSquare} key={index} item = {item}/>)}
            </div> 
        </div>
    
}

export default Board;