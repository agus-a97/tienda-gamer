import React, { useContext } from 'react';
import { contexto } from '../cartContext/CartContext';

export const Cart = () => {

  const {cart}=useContext(contexto)
  console.log(cart);
  
  return <div>
      <h3>Estas en Cart</h3>
  </div>;
};
