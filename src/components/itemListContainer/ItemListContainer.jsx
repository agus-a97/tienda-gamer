import React, { useEffect, useState } from 'react';
import { ItemList } from './itemList/ItemList'
import { Container } from 'react-bootstrap';
import { getFirestore } from '../../firebase/firebase';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {

    const [arrayProductos, setArrayProductos] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

        const dataBase = getFirestore()


        if (categoryId) {
            dataBase
                .collection("items")
                .where("categoryId", "==", categoryId)
                .get()
                .then((res) =>
                    setArrayProductos(
                        res.docs.map((item) => ({ ...item.data(), id: item.id }))
                    )
                )
                .catch((err) =>
                    console.log("CATEGORY: error reading items form firebase => ", err)
                );
        } else {
            dataBase
                .collection("items")
                .get()
                .then((res) =>
                    setArrayProductos(
                        res.docs.map((item) => ({ ...item.data(), id: item.id }))
                    )
                )
                .catch((err) =>
                    console.log("HOME: error reading items form firebase => ", err)
                );
        }

    }, [categoryId])

    return (
        <div style={{margin:'5%'}}>
            <h1 className='titulo-1'>{props.gretting}</h1>


            <Container fluid>

                <ItemList arrayProductos={arrayProductos} />
            </Container>
        </div>
    )
}
