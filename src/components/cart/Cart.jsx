import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contexto } from '../cartContext/CartContext';
import { CartItem } from './cartItem/CartItem';

export const Cart = () => {

  const { cart, clearCart, sumarTotalCart } = useContext(contexto)

  console.log(cart);

  return <div>
    {(cart.length === 0) ?
      <>
        <div style={{
          margin: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h3>Carrito Vacio</h3>
          <p>Ve al catalogo para comprar un producto</p>
          <Link to={'/'}><Button variant="success">Ir a Comprar</Button></Link>
        </div>
      </>
      :
      <>
        <div
          style={{
            margin: '15px',
          }}>

          <div style={{ display: 'flex', alignItems: 'center' }}>

            <h3>Carrito:</h3>

            <Link to={'/'}><Button variant='success' style={{ margin: '5px' }}>Seguir Comprando</Button></Link>
            <Button variant="danger" onClick={clearCart} style={{ margin: '5px' }}>Vaciar Carro</Button>

          </div>

          <div >
            {cart.map(element => <CartItem key={element.item.id} product={element} />)}
          </div>

          <div style={{
            margin: '10px',
            display: 'flex',
            alignItems: 'baseline'
          }}>

            <p>Total a pagar: ${sumarTotalCart()}</p>

            <Link to={'/formulario'}>
              <Button variant='success' style={{ margin: '5px' }}>Terminar Compra</Button>
            </Link>

          </div>


        </div>
      </>}
  </div>;
};
