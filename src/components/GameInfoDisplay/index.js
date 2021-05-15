import { useSelector } from 'react-redux';
import getDisplayText from '../../dependencies/getDisplayText';
import {gameInfo} from "./gameInfoDisplay.module.css"
const GameInfoDisplay = () => {
  const state = useSelector((state) => state);
  const displayText = getDisplayText(state);
  return (
    <div className={gameInfo}>
      {displayText}
    </div>
  );
};

export default GameInfoDisplay;
