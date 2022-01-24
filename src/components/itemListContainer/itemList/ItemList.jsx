import React from 'react';
import { Item } from '../item/Item'
import { Button, Spinner, Row, CardGroup } from 'react-bootstrap';

export const ItemList = (arrayProductos) => {

    console.log(arrayProductos.arrayProductos);
    return (
        <>
            <Row className="justify-content-md-center">

                <h3>Lista de productos:</h3>
                <CardGroup>
                {
                    (arrayProductos.arrayProductos.length > 0) ?
                        <>
                            {arrayProductos.arrayProductos.map(item => {
                                console.log(item);
                                return <Item product={item} />
                            })}
                        </>
                        :
                        <>
                            <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Cargando...
                            </Button>{' '}
                        </>
                }
                </CardGroup>
            </Row>
        </>);

};
