import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

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

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={restarProd}>-</Button>
                <Button variant="secondary" onClick={onAdd}>Agregar</Button>
                <Button variant="secondary" onClick={sumarProd}>+</Button>
            </ButtonGroup>

        </div>
    )
}
