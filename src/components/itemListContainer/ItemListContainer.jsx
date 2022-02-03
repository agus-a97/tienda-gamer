import React, { useEffect, useState } from 'react';
import { ItemList } from './itemList/ItemList'
import data from '../data/data.json'
import { Container } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {

    //aca tiene que ir la logica para para pasarla al item list que resuelva como producto

    const [arrayProductos, setArrayProductos] = useState([]);

    // const { category } = useParams();

    useEffect(() => {

        // console.log(category);
        const promesaProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 5000)
        })

        promesaProd
            .then((res) => {
                
                setArrayProductos(res)
                // if (category) {

                //     res = res.filter(item => item.category === category)
                //     setArrayProductos(res)
                // } else {
                //     setArrayProductos(res)
                // }

            })

    }, [])

    return (
        <div>
            <h1 className='titulo-1'>{props.gretting}</h1>


            <Container fluid="md">

                <ItemList arrayProductos={arrayProductos} />
            </Container>
        </div>
    )
}
