import React from 'react';
import '../hojas de estilo/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClick}>
    {props.children}
  </div>
);

export default BotonClear;