import ResetBtn from '../ResetBtn';
import Board from '../Board';
import GameInfoDisplay from '../GameInfoDisplay';

import {boardContainer} from './game.module.css';

const Game = () => {
	return (
		<div className={boardContainer}>
			<GameInfoDisplay />
			<Board />
			<ResetBtn/>
		</div>
	);
}

export default Game;
