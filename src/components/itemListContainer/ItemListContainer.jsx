import React, { useEffect, useState } from 'react';
import { ItemCount } from './itemCount/ItemCount'
import { ItemList } from './itemList/ItemList'
import data from '../data/data.json'
import { Container } from 'react-bootstrap';

export const ItemListContainer = (props) => {

    //aca tiene que ir la logica para para pasarla al item list que resuelva como producto

    const [arrayProductos, setArrayProductos] = useState([]);

    useEffect(() => {

        const promesaProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 5000)
        })

        promesaProd
            .then((res) => {
                console.log(res);
                setArrayProductos(res)

            })

    }, [])

    return (
        <div>
            <h1 className='titulo-1'>{props.gretting}</h1>

            <ItemCount initial={1} stock={5} />

            <Container fluid="md">

                <ItemList arrayProductos={arrayProductos} />
            </Container>
        </div>
    )
}
