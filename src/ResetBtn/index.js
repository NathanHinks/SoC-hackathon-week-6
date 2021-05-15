import { useDispatch } from 'react-redux';
import { reset } from '../redux/actions';
import { resetBtn } from './resetBtn.module.css';

const ResetBtn = () => {
  const dispatch = useDispatch();
  const handleReset = () => dispatch(reset());

  return (
    <button className={resetBtn} onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetBtn;
