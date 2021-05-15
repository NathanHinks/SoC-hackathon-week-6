import { useDispatch } from 'react-redux';
import { reset } from '../redux/actions';

const ResetBtn = () => {
  const dispatch = useDispatch();
  const handleReset = () => dispatch(reset());

  return (
    <button className='reset-btn' onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetBtn;
