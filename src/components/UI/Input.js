import { forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
      />
      {/* <select></select>, <textarea></textarea>, etc // Alternative*/}
    </div>
  );
});

export default Input;

// TIP: {...props.input} -> Esto asegura que todos los pares clave-valor que estan en el objeto input (el cual recibimos de props.input), se agreguen como props al input.  
// Por lo tanto si el objeto input posee por ejemplo: { id: 1, type: 'text' } entonces usando el spread opeator {...props.input} se agregaran automaticamente como atrubutos del input TODAS las claves-valor que posee el objeto input 😀, por lo tanto el input quedaria de la siguiente forma:
/*

<input
  id="1"
  type="text"
/>

*/