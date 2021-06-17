import { useRef } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddToCart(+amountInputRef.current.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1', // intervalo de cantidad de incremento/decremento
          defaultValue: '1', // valor inicial
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;