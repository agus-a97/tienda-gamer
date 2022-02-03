import React, { createContext, useState } from 'react';

export const contexto = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, count) => {
        //pregunta si existe un producto con ese id, sino existe lo agrega al carrito
        //si existe suma la cantidad existente
        if (isInCart(product.id)) {

            const indexProduct = cart.findIndex(element => element.item.id === product.id)
            console.log(indexProduct);

            cart[indexProduct].count = cart[indexProduct].count + count

        } else {
            setCart([...cart, { item: product, count }])
        }
    }


    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)
    }

    const clear=()=>{
        setCart([]);
    }

    return (
        <>
            <contexto.Provider value={{ cart, addToCart, clear }}>
                {children}
            </contexto.Provider>
        </>
    );
};

export default CartContext;
