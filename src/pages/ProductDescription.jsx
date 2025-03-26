import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from '../hooks/useCart';
import Sidebar from "../components/common/layout/Sidebar";
import QtySetter from "../components/cart/QtySetter";

function ProductDescription() {
    const { id } = useParams();
    const [product, setProductData] = useState(null);
    const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
    const [inCart, setInCart] = useState(false);
    const [currentQty, setCurrentQty] = useState(1);

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const productData = await response.json();
                setProductData(productData);
            } catch (err) {
                console.error("Error Fetching Details: ", err);
            }
        }
        getProduct();

        const cartItem = cartItems.find(item => item.id === parseInt(id));
        if(cartItem) {
            setInCart(true);
            setCurrentQty(cartItem.qty);
        }
    }, [id, cartItems]);

    const handleQtyChange = (qty) => {
        if (qty === 0) {
            setInCart(false);
            removeFromCart(parseInt(id));
        } else {
            setCurrentQty(qty);
            updateQuantity(parseInt(id), qty);
        }
    };

    const handleAddToCart = () => {
        setInCart(true);
        addToCart({ ...product, qty: 1 });
    };

    if (!product) {
        return (
            <p className="text-center text-xl mt-10">
                Loading product details...
            </p>
        );
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex justify-center p-8">
                <div className="max-w-4xl p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
                        <div className="flex justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-80 h-80 object-contain rounded-lg shadow-md"
                            />
                        </div>

                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-3xl font-semibold mt-4">
                                    {product.title}
                                </h1>
                                <p className="text-xl text-gray-600 mt-2 text-justify   ">
                                    {product.description}
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Rs. {product.price}
                                </h3>
                            </div>

                            {/* Product Rating */}
                            <div className="mt-2">
                                <p className="text-lg font-medium text-gray-700">
                                    Rating: {product.rating?.rate} ⭐ (
                                    {product.rating?.count} reviews)
                                </p>
                            </div>

                            <div className="mt-6 flex space-x-4">
                                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                    Add to WishList
                                </button>
                                {inCart ? (
                                    <QtySetter
                                        onQtyChange={handleQtyChange}
                                        product={product}
                                        initialQty={currentQty}
                                    />
                                ) : (
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;
