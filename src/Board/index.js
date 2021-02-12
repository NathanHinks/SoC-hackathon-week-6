import React, {useState} from "react";
import Square from "../Square";

function Board() {
    return <div> <div className = "current-player"> 
        current player goes here
        </div>
        <div className = "borad-row row-1" > 
        <Square/>
        <Square/>
        <Square/>
        </div>
        <div className = "borad-row row-2"> 
        <Square/>
        <Square/>
        <Square/>
        </div>
        <div className = "borad-row row-3"> 
        <Square/>
        <Square/>
        <Square/>
        </div>
        </div>
    
}

export default Board;