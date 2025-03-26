import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

function QtySetter({ onQtyChange, product, initialQty = 1 }) {
  const [qty, setQty] = useState(initialQty);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = storedCart.find(item => item.id === product.id);
    if (productInCart) {
      setQty(productInCart.qty);
    }
  }, [product.id, initialQty]);

  const handleClick = (action) => {
    let newQty = qty;

    if (action === "decrement" && newQty > 0) {
      newQty = qty - 1;
    } else if (action === "increment") {
      newQty = qty + 1;
    }

    setQty(newQty);
    onQtyChange(newQty);

    // Update localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (newQty === 0) {
      const updatedCart = storedCart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = storedCart.map(item =>
        item.id === product.id ? { ...item, qty: newQty } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="flex justify-around border-1 border-blue-950 rounded w-24 bg-blue-500 text-white">
      <button 
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleClick("decrement");
        }} 
        className="cursor-pointer px-1 hover:bg-blue-600 rounded-l"
      >
        <Minus size={18} />
      </button>
      <p className="text-black bg-white w-8 flex items-center justify-center">{qty}</p>
      <button 
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleClick("increment");
        }} 
        className="cursor-pointer px-1 hover:bg-blue-600 rounded-r"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}

export default QtySetter;
