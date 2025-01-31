import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// function Home() {
//   return <h1 className="text-center text-2xl mt-10">Welcome to Home Page</h1>;
// }

// function Cart() {
//   return <h1 className="text-center text-2xl mt-10">Your Cart</h1>;
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

