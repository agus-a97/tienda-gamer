import React, { useState } from 'react'
import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'
import { ItemCount } from '../../itemDetailContainer/itemCount/ItemCount'
import '../itemDetail/style.css'

export const ItemDetail = ({ producto }) => {

    function onAdd(cantidad,precio) {
            alert(` Reservaste ${cantidad} pasajes para ${producto.title} \n Total a pagar ${precio}`)
    }
    return (
        <div className='bckDetail'>
            <div className='imgDetail'>
                <img src={producto.pictureUrl} alt={producto.title} className='imgTamaño' />
            </div>
            <div className='divDetail'>
                <h3>{producto.title}</h3>
                <article>{producto.description}</article>
                <Card.Text>
                    Precio: {producto.price}
                    <br />
                    Reserva Minima: {producto.initial}
                    <br />
                </Card.Text>

                <ItemCount producto={producto} onAdd={onAdd} />
            </div>
        </div>
    )
}
