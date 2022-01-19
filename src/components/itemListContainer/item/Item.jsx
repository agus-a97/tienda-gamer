import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

export const Item = ({product, initial, stock }) => {


    const [count, setCount] = useState(initial);
    const [acum, setAcum] = useState(product.price);

    function sumarProd() {
        const newValue = count + 1;
        const newPrice = acum + product.price
        if (newValue <= stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        const newValue = count - 1;
        const newPrice = acum - product.price
        if (newValue >= initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function onAdd() {
        (count===initial)?
        alert(` Agregaste ${count} unidad de ${product.title} al carro \n Total a pagar ${acum}`)
        :
        alert(` Agregaste ${count} unidades de ${product.title} al carro \n Total a pagar ${acum}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Img variant="top" src={product.pictureUrl} />

                    <Card.Title>{product.title}</Card.Title>

                    <Card.Text>
                        Precio: {product.price}
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
