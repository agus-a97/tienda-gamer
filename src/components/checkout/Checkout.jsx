import React, { useState, useRef, useContext } from 'react'
import firebase from "firebase/app";
import { getFirestore } from '../../firebase/firebase';
import { contexto } from '../cartContext/CartContext';
import { Form, Button } from 'react-bootstrap';

const Checkout = () => {

    const { cart, sumarTotalCart,clearCart } = useContext(contexto);

    // const items = [{}];
    // for (const element of cart) {

    //     items.title = element.item.title;
    //     items.price = element.item.price;
    //     items.id = element.item.id;
    // }

    // console.log(items);

    const [ordersId, setOrdersId] = useState('');

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const addOrden = () => {

        const dataBase = getFirestore();
        const orders = dataBase.collection('orders');

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
            },
            items: cart,
            total: sumarTotalCart(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada ' + id);
                setOrdersId(id);
            })
            .catch((err) => {
                console.log(err);
            })

        clearCart()
        
    }




    return (
        <>
            {/* {ordersId && (<h1>Felicitaciones tu order es {ordersId}</h1>)} */}

            {
                (ordersId) ?
                    <>
                    <div style={{
                        margin: '5% 25%',
                        padding: '1%',
                        border: '1px solid grey'
                    }}>
                        <h1>Felicidades!</h1>
                        <p>Tu orden: <strong>{ordersId}</strong> se completo con exito.<br/> Pronto nos contactaremos contigo</p>
                    </div>
                    </>
                    :
                    <>
                        <div style={{
                            margin: '5% 25%',
                            padding: '1%',
                            width: '50%',
                            border: '1px solid grey',
                            borderRadius: '5px'
                        }}>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="name" placeholder="Ingrese nu nombre" ref={nameRef} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>Numero</Form.Label>
                                    <Form.Control type="number" placeholder="Ingrese su telefono" ref={phoneRef} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese su mail" ref={emailRef} />
                                </Form.Group>

                                <Button variant="primary" onClick={() => addOrden()}>
                                    Enviar
                                </Button>
                                <Form.Text className="text-muted">
                                    No compartiremos su informacion con nadie
                                </Form.Text>

                            </Form>
                        </div>

                    </>
            }

        </>
    )
}

export default Checkout