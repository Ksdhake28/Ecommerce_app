import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="font-display bg-gray-900 text-white p-4 sahdow-md">
            <div className="container mx-auto flex justify-between text-white items-center">
                <div className="text-3xl font-bold text-red-500">EcommerceApp</div>
                    <ul className="hidden md:flex space-x-6 text-lg">
                        <li>
                            <Link to="/" className="hover:text-red-500 transition duration-100">Home</Link></li>
                        <li>
                            <Link to="/cart" className="hover:text-red-500 transition duration-300">Cart</Link></li>
                    </ul>
            </div>
        </nav>
    );
}
export default Navbar;
