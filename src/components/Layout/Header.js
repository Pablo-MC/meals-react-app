import { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;

// IMPORTANTE: onClick en el Componenete personalizado HeaderCartButton NO es un evento!, simplemente esta pasando una función. onClick se ejecuta como evento en los elementos html INTEGRADOS pero NO en los personalizados.  