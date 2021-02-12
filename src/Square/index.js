import React from "react";

function Square({item, fillSquare, index }) {
    return <button className="square" onClick ={() => fillSquare(index)}>{item}</button>
}

export default Square;