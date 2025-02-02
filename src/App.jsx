import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  let [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage when the app starts
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart using state
      const insideCart = prevItems.some((item) => item.id === product.id);
      if (!insideCart) {
        return [...prevItems, product];
      } else {
        return prevItems; // No changes if the product is already in cart
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId) || []);
  };
  

  useEffect(() => {
    // Save cart items to localStorage whenever cartItems change
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
      </Routes>
    </Router>
  );
}

export default App;
