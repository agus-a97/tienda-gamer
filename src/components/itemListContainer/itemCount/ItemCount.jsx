import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

export const ItemCount = ({ initial, stock }) => {

    const price = 350;

    const [count, setCount] = useState(initial);
    const [acum, setAcum] = useState(price);

    function sumarProd() {
        const newValue = count + 1;
        const newPrice = acum + price
        if (newValue <= stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        const newValue = count - 1;
        const newPrice = acum - price
        if (newValue >= initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function onAdd() {
        (count===initial)?
        alert(` Agregaste ${count} producto al carro \n Total a pagar ${acum}`)
        :
        alert(` Agregaste ${count} productos al carro \n Total a pagar ${acum}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Item Count</Card.Title>
                    <Card.Text>
                        Precio: 350
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
        </div>
    )
}
