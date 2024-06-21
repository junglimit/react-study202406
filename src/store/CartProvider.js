import React from 'react';
import CartContext from "./Cart-context";

const CartProvider = ({children}) => {
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;