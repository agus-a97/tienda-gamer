import React, { useState } from 'react'
import { Card, Button, ButtonGroup, Row } from 'react-bootstrap'

export const ItemCount = ({ initial, producto, onAdd }) => {

    const [count, setCount] = useState(initial);
    const [acum, setAcum] = useState(producto.price);

    function sumarProd() {
        
        const newValue = count + 1;
        const newPrice = acum + producto.price;
        if (newValue <= producto.stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        
        const newValue = count - 1;
        const newPrice = acum - producto.price;
        if (newValue >= initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    return (
        <div>

            <Card.Text>
                Productos Reservados: {count}
                <br />
                Total a pagar: {acum}
            </Card.Text>

            <Row className="justify-content-md-center">
                <ButtonGroup aria-label="Basic example" size="lg" >
                    <Button variant="primary" onClick={restarProd}>-</Button>
                    <Button variant="primary" onClick={() => onAdd(count, acum)}>Agregar</Button>
                    <Button variant="primary" onClick={sumarProd}>+</Button>
                </ButtonGroup>
            </Row>

        </div>
    )
}
