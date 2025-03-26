export const getCartFromStorage = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

export const setCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartItem = (id, qty, cart) => {
    const updatedCart = cart.map((item) =>
        item.id === parseInt(id) ? { ...item, qty } : item
    );
    setCartToStorage(updatedCart);
    return updatedCart;
};

export const addItemToCart = (product, qty = 1) => {
    const cart = getCartFromStorage();
    const updatedCart = [...cart, { ...product, qty }];
    setCartToStorage(updatedCart);
    return updatedCart;
};

export const removeItemFromCart = (id) => {
    const cart = getCartFromStorage();
    const updatedCart = cart.filter(item => item.id !== parseInt(id));
    setCartToStorage(updatedCart);
    return updatedCart;
};