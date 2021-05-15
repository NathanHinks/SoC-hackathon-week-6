import { useSelector } from 'react-redux';
import {gameInfo} from "./gameInfoDisplay.module.css"
const GameInfoDisplay = () => {
  const { winner, isPlayerXTurn } = useSelector((state) => state);

  return (
    <div className={gameInfo}>
      {winner ? (
        `Winner is: ${winner}`
      ) : (
        `Next Player: ${isPlayerXTurn ? 'X' : 'O'}`
      )}
    </div>
  );
};

export default GameInfoDisplay;
