import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {


    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Img variant="top" src={product.imageId} />

                        <Card.Title>{product.title}</Card.Title>

                        <Card.Text>
                            Precio: {product.price}
                            <br />
                            Compra Minima: {product.initial}
                            <br />
                            Categoria: {product.categoryId}

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
