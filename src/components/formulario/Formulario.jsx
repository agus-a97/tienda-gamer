import React, { useState, useRef, useContext } from 'react'
import firebase from "firebase/app";
import { getFirestore } from '../../firebase/firebase';
import { contexto } from '../cartContext/CartContext';
import { Form, Button } from 'react-bootstrap';

const Formulario = () => {

    const { cart, sumarTotalCart, clearCart } = useContext(contexto);


    const [ordersId, setOrdersId] = useState('');

    const [validated, setValidated] = useState(false);

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();


    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            event.preventDefault();
            event.stopPropagation();
            console.log("faltan datos");
        } else {
            event.preventDefault();
            addOrden();
        }

        setValidated(true);

    };

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
            <div style={{ margin: '7% 5%' }}>
                {
                    (ordersId) ?
                        <>
                            <div style={{
                                margin: '14% 15%',
                                padding: '1%',
                                border: '1px solid grey'
                            }}>
                                <h2>¡Felicidades!</h2>
                                <p>Tu Compra se completo con exito.<br /> Tu numero de orden es: <strong>{ordersId}</strong>. <br />Pronto nos contactaremos contigo!</p>
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
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            required
                                            type="name"
                                            placeholder="Ingrese nu nombre"
                                            ref={nameRef}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            Ingrese un nombre valido
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationCustom02">
                                        <Form.Label>Numero</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="Ingrese su telefono"
                                            ref={phoneRef}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            Igrese un numero valido
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationCustom03">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Ingrese su mail"
                                            ref={emailRef}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            Ingrede un email valido
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        // onClick={() => addOrden()}
                                        type='submit'
                                    >
                                        Enviar
                                    </Button>
                                    <Form.Text className="text-muted">
                                        No compartiremos su informacion con nadie
                                    </Form.Text>

                                </Form>
                            </div>

                        </>
                }
            </div>

        </>
    )
}

export default Formulario