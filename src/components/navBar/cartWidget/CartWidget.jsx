import React from 'react';
import { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { contexto } from '../../cartContext/CartContext';


export default function CartWidget() {

    const { cart } = useContext(contexto);

    return (
        <>
            <div style={{
                background: 'white',
                margin: "0px 0.25rem",
                padding: "0.25rem",
                borderRadius: "0.25rem",

            }}>

                <BsFillCartFill />

                <span style={{
                    background: "#141414f6",
                    margin: "0px 0.25rem",
                    padding: "0.25rem",
                    borderRadius: "0.25rem",
                    color: "white",
                    fontWeight: "bold",
                }}>
                    {cart.length}
                </span>
            </div>
        </>
    )
}