import React, {useState} from "react";
import Square from "../Square";

function Board() {
    return <div> <div className = "current-player"> 
        current player goes here
        </div>
        <div className = "borad-row row-1" > 
        <Square index = {0}/>
        <Square index = {1}/>
        <Square index = {2}/>
        </div>
        <div className = "borad-row row-2"> 
        <Square index = {3}/>
        <Square index = {4}/>
        <Square index = {5}/>
        </div>
        <div className = "borad-row row-3"> 
        <Square index = {6}/>
        <Square index = {7}/>
        <Square index = {8}/>
        </div>
        </div>
    
}

export default Board;