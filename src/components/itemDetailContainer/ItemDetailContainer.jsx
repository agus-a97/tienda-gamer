import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail/ItemDetail';
import data from '../data/data.json'
import { Container } from 'react-bootstrap'


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();

    useEffect(() => {

        const promesaProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })

        promesaProd
            .then((res) => {
                console.log(res);
                res = res.filter(item => item.id === 5)
                setProducto(res[0])

            })

    }, [])
    
    return <>
        <h2>Esto es ItemDetailContainer</h2>

        {(producto) ?
            <>
                <Container fluid="md">
                    <ItemDetail producto={producto} />
                </Container>
            </>
            :
            <>
            <p>Cargando ItemDetail</p>
            </>}


    </>;
};
