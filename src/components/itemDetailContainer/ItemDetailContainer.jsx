import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail/ItemDetail';
import data from '../data/data.json'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();

    const { id } = useParams()

    useEffect(() => {

        const dataBase = getFirestore();

        const itemCollection = dataBase.collection("items");

        const myItem = itemCollection.doc(id);

        myItem.get()
            .then((doc) => {

                /* console.log(doc.data());
                console.log(doc.id);
        
                console.log({ id: doc.id, ...doc.data() }); */

                if (!doc.exists) {
                    console.log('no existe ese documento');
                    return
                }

                console.log('item found');
                setProducto({ id: doc.id, ...doc.data() });

            })
            .catch((err) => {
                console.log(err);
            })

    }, [id])

    return <>
        <h2>Esto es ItemDetailContainer</h2>

        {(producto) ?
            <>
                <Container fluid="md">
                    <ItemDetail initial={1} producto={producto} />
                </Container>
            </>
            :
            <>
                <p>Cargando ItemDetail</p>
            </>}


    </>;
};
