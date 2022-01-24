import React, { useState } from 'react'
import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'

export const ItemDetail = ({ producto }) => {


    const [count, setCount] = useState(producto.initial);
    const [acum, setAcum] = useState(producto.price);

    function sumarProd() {
        const newValue = count + 1;
        const newPrice = acum + producto.price
        if (newValue <= producto.stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        const newValue = count - 1;
        const newPrice = acum - producto.price
        if (newValue >= producto.initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function onAdd() {
        (count === producto.initial) ?
            alert(` Reservaste ${count} pasaje para ${producto.title} \n Total a pagar ${acum}`)
            :
            alert(` Reservaste ${count} pasajes para ${producto.title} \n Total a pagar ${acum}`)
    }
    return (
        <div>
            <h3>ItemDetail Cargado</h3>
            <Col>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Img variant="top" src={producto.pictureUrl} />

                        <Card.Title>{producto.title}</Card.Title>

                        <Card.Text>
                            Precio: {producto.price}
                            <br />
                            Reserva Minima: {producto.initial}
                            <br />
                            Cantidad: {count}
                            <br />
                            Total: {acum}
                        </Card.Text>

                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={restarProd}>-</Button>
                            <Button variant="secondary" onClick={onAdd}>Agregar</Button>
                            <Button variant="secondary" onClick={sumarProd}>+</Button>
                        </ButtonGroup>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
