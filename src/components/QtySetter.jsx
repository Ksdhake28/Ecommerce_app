import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

function QtySetter({ onQtyChange, product }) {
  let [qty, setQty] = useState(1);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = storedCart.find((item) => item.id === product.id);
    if (productInCart) {
      setQty(productInCart.qty);
    }
  }, [product.id]);

  const updateCartQty = (newQty) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    let updatedCart = storedCart.map((item) => {
      if (item.id === product.id) {
        return { ...item, qty: newQty };
      }
      return item;
    });

    if (newQty === 0) {
      updatedCart = updatedCart.filter((item) => item.id !== product.id);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClick = (action) => {
    setQty((prevQty) => {
      let newQty = prevQty;

      if (action === "decrement" && newQty > 0) {
        newQty = prevQty - 1;
      } else if (action === "increment") {
        newQty = prevQty + 1;
      }

      let newPrice = newQty * product.price;

      // Update local storage with the new quantity
      updateCartQty(newQty);

      // Notify the parent component with the updated qty and price
      onQtyChange(product.id, newQty, newPrice);

      return newQty;
    });
  };

  return (
    <div className="flex justify-around border-1 border-blue-950 rounded w-24 bg-blue-500 text-white">
      <button id="decrement" onClick={() => handleClick("decrement")} className="cursor-pointer">
        <Minus size={18} />
      </button>
      <p className="text-black bg-white w-8 flex items-center justify-center">{qty}</p>
      <button id="increment" onClick={() => handleClick("increment")} className="cursor-pointer">
        <Plus size={18} />
      </button>
    </div>
  );
}

export default QtySetter;
