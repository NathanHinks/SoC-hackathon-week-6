import { useSelector } from 'react-redux';
import Square from "../Square"

import {boardContainer} from "./board.module.css"

const Board = () => {
  const board = useSelector((state) => state.board);

  return (
    <div className={boardContainer}>
      {board.map((item, index) => (
        <Square index={index} key={index} item={item} />
      ))}
    </div>
  );
};

export default Board