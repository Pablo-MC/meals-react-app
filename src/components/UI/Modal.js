import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

// Componente que se encarga de oscurecer el fondo.
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose} />
  );
}

// Componte contenedor que se encarga de superponer el Modal con todo el contenido.
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

// Componente contenedor que se encarga de renderizar el Modal. 
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onCloseModal} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal;

// Alternativa SIN usar portales
// const Modal = (props) => {
//   return (
//     <Fragment>
//       <Backdrop />
//       <ModalOverlay>
//         {props.children}
//       </ModalOverlay>
//     </Fragment>
//   );
// }

// export default Modal;