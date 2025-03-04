import QtySetter from "./QtySetter";
import { useState } from "react";

function CartStrip({ id, title, price, image, onRemove }) {
    let [newPrice, setPrice] = useState(price);

    const handleClick = (qty) => {
        if (qty === 0) {
            onRemove(id);
        } else {
            setPrice(qty * price);
        }
    };

    return (
        <div className="flex gap-5 border-2 border-gray-500 rounded-md p-4 mt-4 w-3/5 shadow-md text-xl font-display">
            <img src={image} alt={title} className="rounded-lg h-40 w-40" />
            <div className="flex-1 pl-5 flex flex-col justify-evenly">
                <h1 className="text-2xl">{title}</h1>

                <QtySetter onQtyChange={handleClick} product={{ id, price }} />

                <div className="flex items-center gap-5">
                    <h3>Price:</h3>
                    <h3>{newPrice}</h3>
                </div>
            </div>
        </div>
    );
}

export default CartStrip;
