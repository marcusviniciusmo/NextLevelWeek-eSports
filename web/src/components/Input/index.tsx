/* Types */
import { InputProps } from '../../types';
/* Styles */
import './styles.css';

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className='inputComponent'
    />
  );
};

export default Input;