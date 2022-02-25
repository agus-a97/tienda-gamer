import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail/ItemDetail';
import { Container, Spinner } from 'react-bootstrap'
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

        {(producto) ?
            <>
                <Container fluid="md" style={{ margin: '10%' }}>
                    <ItemDetail initial={1} producto={producto} />
                </Container>
            </>
            :
            <>
            <div style={{margin:'25% 20%'}}>
                <h2>Cargando</h2>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="dark" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="dark" />
            </div>
            </>}


    </>;
};
