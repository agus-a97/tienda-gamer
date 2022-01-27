import React, { useState } from 'react'
import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {


    const [count, setCount] = useState(product.initial);
    const [acum, setAcum] = useState(product.price);

    function sumarProd() {
        const newValue = count + 1;
        const newPrice = acum + product.price
        if (newValue <= product.stock) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function restarProd() {
        const newValue = count - 1;
        const newPrice = acum - product.price
        if (newValue >= product.initial) {
            setCount(newValue)
            setAcum(newPrice)
        }
    }

    function onAdd() {
        (count === product.initial) ?
            alert(` Reservaste ${count} pasaje para ${product.title} \n Total a pagar ${acum}`)
            :
            alert(` Reservaste ${count} pasajes para ${product.title} \n Total a pagar ${acum}`)
    }
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Img variant="top" src={product.pictureUrl} />

                        <Card.Title>{product.title}</Card.Title>

                        <Card.Text>
                            Precio: {product.price}
                            <br />
                            Reserva Minima: {product.initial}
                            <br />
                            Clima: {product.category}

                        </Card.Text>

                        <ButtonGroup aria-label="Basic example">
                            <Link to={`/producto/${product.id}`}>
                                <Button variant="primary">Ver detalle</Button>
                            </Link>

                        </ButtonGroup>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
