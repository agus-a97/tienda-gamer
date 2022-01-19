import React, { useEffect, useState } from 'react';
import { promesaProd } from '../../products'
import { Item } from '../item/Item'
import { Button, Spinner } from 'react-bootstrap';

export const ItemList = () => {

    const [llegoLaPromesa, setLLegoLaPromesa] = useState(false);

    const [arrayProductos, setArrayProductos] = useState([]);

    useEffect(() => {

        promesaProd
            .then((res) => {
                // console.log(res);
                setArrayProductos(res)
                setLLegoLaPromesa(true)
            })

    }, [])

    return (
    <>
        <h3>Lista de productos:</h3>

        {
            (llegoLaPromesa) ?
                <>
                    {arrayProductos.map(item => {
                        // console.log(item);
                        return <Item product={item} initial={1} stock={5} />
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
    </>);
};
