import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

// Cuando usamos el Context en un determinado Componente, dicho Componente será reevaluado por React cuando cambie el Context. Y por su puesto cambiará cuando lo actualizamos en el Componente CartProvider. 