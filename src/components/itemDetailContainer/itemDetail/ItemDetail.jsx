import React, { useContext, useState } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { contexto } from '../../cartContext/CartContext'
import { ItemCount } from '../../itemDetailContainer/itemCount/ItemCount'
import '../itemDetail/style.css'

export const ItemDetail = ({ producto }) => {

    const { addToCart }=useContext(contexto);

    const [mostrarItemCount, setMostrarItemCount] = useState(true);


    function onAdd(cantidad, precio) {
        alert(` Reservaste ${cantidad} pasajes para ${producto.title} \n Total a pagar ${precio}`)
        addToCart(producto,cantidad)
        setMostrarItemCount(false)
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

                <Container>
                    {
                        (mostrarItemCount) ?
                            <ItemCount producto={producto} onAdd={onAdd} />
                            :
                            <Link to={'/cart'} style={{textDecoration: 'none'}}>
                                <Row className="justify-content-md-center">
                                    <Button variant="success" size="lg" >Terminar Compra</Button>
                                </Row>
                            </Link>
                    }
                </Container>
            </div>
        </div>
    )
}
