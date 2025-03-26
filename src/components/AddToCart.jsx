import React, { useState, useEffect } from "react";

function AddToCart({ product, addToCart }) {
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const isItemInCart = storedCart.some(item => item.id === product.id);
        setInCart(isItemInCart);
    }, [product.id]);

    const handleAddToCart = () => {
        setInCart(true);
        addToCart({ ...product, qty: 1 });
    };

    return (
        <div>
            {!inCart && (
                <button 
                    onClick={handleAddToCart} 
                    className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                    Add to Cart
                </button>
            )}
            {inCart && (
                <span className="text-green-600 font-semibold">Added to Cart</span>
            )}
        </div>
    );
}

export default AddToCart;