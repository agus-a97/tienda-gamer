import React, { useState } from 'react'
import { Card, Button, ButtonGroup, Row } from 'react-bootstrap'

export const ItemCount = ({ producto, onAdd }) => {

    const [count, setCount] = useState(producto.initial);
    const [acum, setAcum] = useState(producto.price);

    function sumarProd() {
        console.log("suma");
        const newValue = count + 1;
        const newPrice = acum + producto.price
        if (newValue <= producto.stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        console.log("resta");
        const newValue = count - 1;
        const newPrice = acum - producto.price
        if (newValue >= producto.initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    return (
        <div>

            <Card.Text>
                Pasajes Reservados: {count}
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
