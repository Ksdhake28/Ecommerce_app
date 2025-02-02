import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import QtySetter from "./QtySetter";

function ProductCard(props) {
    const { addToCart } = props;
    let [inCart, setInCart] = useState(false);

    useEffect(() => {
        const storedInCart = JSON.parse(localStorage.getItem("cart")) || [];
        const isItemInCart = storedInCart.some((item) => item.id === props.id);
        setInCart(isItemInCart);
    }, [props.id]);

    const handleClick = () => {
        setInCart(true);
        addToCart({ ...props, qty: 1 });
    };

    const handleQtyChange = (qty) => {
        if (qty === 0) {
            setInCart(false);
        }
    };

    return (
        <div className="p-4 m-2 bg-white shadow-md rounded-lg w-64 border-2 border-gray-200 text-center items-center justify-center hover:shadow-lg transition-all font-display">
            <div className="h-40 flex justify-center item-center">
                <img src={props.image} alt="Product_img" className="h-full rounded-lg w-3/4" />
            </div>
            <div className="mt-5 font-display flex flex-col flex-grow">
                <p className="text-xl">{props.title}</p>
                <h2 className="text-2xl mt-2 font-medium">{props.price}</h2>
                <div className="flex items-center justify-center">
                    {inCart ? (
                        <QtySetter onQtyChange={handleQtyChange} productID={props.id} />
                    ) : (
                        <button onClick={handleClick} className="bg-blue-500 text-white rounded-md flex gap-3 px-3 py-1 items-center justify-center hover:bg-blue-600 transition">
                            <ShoppingCart size={18} /> Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
