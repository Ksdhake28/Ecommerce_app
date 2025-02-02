import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import CartStrip from "../components/CartStrip.jsx";

function Cart({ cartItems, removeFromCart }) {
    
    return (
        <div className="flex">
            <Sidebar className="w-1/4" />
            <div className="flex-1 bg-gray-100 p-6">
                <SearchBar />
                {cartItems.length == 0 ? (
                    <p className="text-3xl text-gray-500 font-display mt-10 px-4">
                        {" "}
                        Your Cart is Empty{" "}
                    </p>
                ) : (
                    cartItems.map((product) => (
                        <CartStrip
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            onRemove={removeFromCart}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
