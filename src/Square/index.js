import React from "react";
import './square.css';

function Square({item, fillSquare, index }) {
    return <button className="square" onClick ={() => fillSquare(index)} transitionName="button-change">{item}</button>
}

export default Square;