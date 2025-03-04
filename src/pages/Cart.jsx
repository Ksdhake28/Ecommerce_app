import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import CartStrip from "../components/CartStrip.jsx";
import TotalAmount from "../components/TotalAmount.jsx";

function Cart({ cartItems, setCartItems, removeFromCart }) {
  const [Total, setTotal] = useState(0);

  // Update cart item quantity and recalculate total
  const handleQtyChange = (id, newQty) => {
    const updatedCart = cartItems.map((product) => 
      product.id === id ? { ...product, qty: newQty } : product
    );

    setCartItems(updatedCart); // Update state in Cart
  };

  // Recalculate total whenever cartItems change
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, product) => sum + product.price * product.qty,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="flex">
      <Sidebar className="w-1/4" />
      <div className="flex-1 bg-gray-100 p-6">
        <SearchBar />
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3">
            {cartItems.length === 0 ? (
              <p className="text-3xl text-gray-500 font-display mt-10 px-4">
                Your Cart is Empty
              </p>
            ) : (
              cartItems.map((product) => (
                <CartStrip
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  qty={product.qty} // Pass qty to CartStrip
                  image={product.image}
                  onQtyChange={handleQtyChange} // Pass qty handler
                  onRemove={removeFromCart}
                />
              ))
            )}
          </div>
          <div className="w-full lg:w-1/3">
            <TotalAmount total={Total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
