import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { contexto } from '../../cartContext/CartContext';

export const CartItem = (product) => {

    const { deleteItem } = useContext(contexto)
    console.log(product);
    return (
        <div style={{
            margin: '15px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '3px'
        }}>
            <h4>{product.product.item.title}</h4>
            <p>Cantidad:{product.product.count}</p>
            <p>Precio por unidad: ${product.product.item.price}</p>
            <p>Subtotal: ${product.product.item.price*product.product.count}</p>
            <Button variant='warning' onClick={() => deleteItem(product.product.item.id)}>Quitar del Carro</Button>
        </div>
    )
};
