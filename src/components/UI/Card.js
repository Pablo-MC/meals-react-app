import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
}

export default Card;

// El componente Card contiene una estructura óptima y algo de codigo CSS para CUALQUIER contenido que queramos. Por lo tanto este es un componente que podría usarse en lugares diferentes a lo largo de la aplicación, razón por la cual este componente es un componente de Interfaz de Usuario (UI) GENERAL. 

// OBS: El componente Card cumple la función de ser un contenedor personalizado(Wrapper Component), el cual es un div al cual le establecemos un estilo predeterminado (className={classes.card}). Y luego dentro del div debemos colocar {props.children} el cual será TODO el contenido que esté envuelto entre la etiqueta de apertura y de cierre del componente Card.