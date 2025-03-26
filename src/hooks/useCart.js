import { useState, useEffect } from 'react';
import { getCartFromStorage, setCartToStorage, updateCartItem, addItemToCart, removeItemFromCart } from '../utils/cartUtils';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const items = getCartFromStorage();
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const newTotal = items.reduce(
            (sum, product) => sum + product.price * product.qty,
            0
        );
        setTotal(newTotal);
    };

    const addToCart = (product) => {
        const updatedCart = addItemToCart(product);
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = removeItemFromCart(id);
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
    };

    const updateQuantity = (id, qty) => {
        const updatedCart = updateCartItem(id, qty, cartItems);
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
    };

    return {
        cartItems,
        total,
        addToCart,
        removeFromCart,
        updateQuantity
    };
};