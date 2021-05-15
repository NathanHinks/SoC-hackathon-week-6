import { useDispatch } from 'react-redux';
import { takeTurn } from '../redux/actions';
import './square.css';

function Square({ item, index }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(takeTurn(index));

  return (
    <button
      className='square'
      onClick={handleClick}
      transitionName='button-change'
    >
      {item}
    </button>
  );
}

export default Square;
