import React, { useContext } from 'react';
import { contexto } from '../cartContext/CartContext';

export const Cart = () => {

  const {cart,clear}=useContext(contexto)
  console.log(cart);

  return <div>
      <h3>Estas en Cart</h3>
      <button onClick={clear}>Vaciar Carro</button>
  </div>;
};
