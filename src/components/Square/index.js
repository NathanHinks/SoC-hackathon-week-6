import { useDispatch } from 'react-redux';
import { takeTurn } from '../../redux/actions';


const Square = ({ item, index }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(takeTurn(index));

  return (
    <button
      onClick={handleClick}
    >
      {item}
    </button>
  );
};

export default Square;
