import React from 'react';
import { Item } from '../item/Item'
import { Spinner, Row, CardGroup, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ItemList = (arrayProductos) => {

    const { category } = useParams();

    return (
        <>
            {
                (arrayProductos.arrayProductos.length > 0) ?
                    <>
                        <h3>Productos:</h3>
                            
                        <Row className="justify-content-md-center">

                            <CardGroup>
                                {arrayProductos.arrayProductos.map(item => {
                                    return <Item product={item} />
                                })}
                            </CardGroup>
                        </Row>
                    </>
                    :
                    <>
                        <div style={{ margin:'24% 20%' }}>
                            <h2>Cargando</h2>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="dark" />
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="dark" />
                        </div>
                    </>
            }
        </>);

};
