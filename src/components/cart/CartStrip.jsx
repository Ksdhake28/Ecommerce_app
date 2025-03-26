import QtySetter from "./QtySetter";
import { useState, useEffect } from "react";
function CartStrip({
    id,
    title,
    price,
    image,
    onRemove,
    qty: initialQty,
    onQtyChange,
}) {
    const [newPrice, setPrice] = useState(price * initialQty);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = storedCart.find((item) => item.id === id);
        if (item) {
            initialQty = item.qty;
        }
        setPrice(price * initialQty);
    }, [price, initialQty]);

    const handleQtyChange = (qty) => {
        if (qty === 0) {
            onRemove(id);
        } else {
            const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCart = storedCart.map((item) => {
                if (item.id === id) {
                    return { ...item, qty: qty };
                }
                return item;
            });
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setPrice(qty * price);
            onQtyChange(id, qty);
        }
    };

    return (
        <div className="flex gap-5 border-2 border-gray-500 rounded-md p-4 mt-4 w-3/5 shadow-md text-xl font-display">
            <img src={image} alt={title} className="rounded-lg h-40 w-40" />
            <div className="flex-1 pl-5 flex flex-col justify-evenly">
                <h1 className="text-2xl">{title}</h1>

                <QtySetter
                    onQtyChange={handleQtyChange}
                    product={{ id, price }}
                    initialQty={initialQty}
                />

                <div className="flex items-center gap-5">
                    <h3>Price:</h3>
                    <h3>₹ {newPrice.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
}

export default CartStrip;
