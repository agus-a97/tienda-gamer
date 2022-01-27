import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail/ItemDetail';
import data from '../data/data.json'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();

    const {id}= useParams()

    useEffect(() => {
        console.log(id);

        const promesaProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })

        promesaProd
            .then((res) => {
                res = res.find(item => item.id == id)
                setProducto(res)
                console.log(res);

            })

    }, [id])
    
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
