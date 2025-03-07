import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="font-display bg-[#1E3A8A] text-[#F3F4F6] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-[#FACC15]">
                    EcommerceApp
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li>
                        <Link to="/" className="hover:text-[#FACC15] transition duration-100">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-[#FACC15] transition duration-300 flex items-center gap-1">
                            <FaShoppingCart size={18} />
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist" className="hover:text-[#FACC15] transition duration-300 flex items-center gap-1">
                            <FaHeart size={18} />
                            Wishlist
                        </Link>
                    </li>
                </ul>

                {/* Login & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="hidden md:flex items-center gap-1 px-4 py-2 bg-[#FACC15] text-[#1E3A8A] font-semibold rounded-lg hover:bg-[#FFD700] transition">
                        <FaUser />
                        Login
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-white text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#1E3A8A] text-[#F3F4F6] p-4 absolute top-16 w-full shadow-lg">
                    <ul className="space-y-3 text-lg">
                        <li>
                            <Link to="/" className="block hover:text-[#FACC15] transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="block hover:text-[#FACC15] transition flex items-center gap-1">
                                <FaShoppingCart />
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/wishlist" className="block hover:text-[#FACC15] transition flex items-center gap-1">
                                <FaHeart />
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="block px-4 py-2 bg-[#FACC15] text-[#1E3A8A] font-semibold text-center rounded-lg hover:bg-[#FFD700] transition">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
