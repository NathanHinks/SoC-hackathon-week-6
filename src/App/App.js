import './App.css';
import Board from '../Board';

import store from "../redux/store"


function App() {
	console.log(store.getState())

	return (
		<div className='App'>
			<Board />
		</div>
	);
}

export default App;
