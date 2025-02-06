import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import CartStrip from "../components/CartStrip.jsx";
import TotalAmount from "../components/TotalAmount.jsx";

function Cart({ cartItems, removeFromCart }) {
  console.log(cartItems);
  const [Total, setTotal] = useState(0);

  // Calculate total when cartItems change
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
        {/* Use flex-col on small screens and flex-row on large screens */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Cart Items Section */}
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
                  price={product.price * product.qty}
                  image={product.image}
                  onRemove={removeFromCart}
                />
              ))
            )}
          </div>
          {/* Checkout/Total Amount Section */}
          <div className="w-full lg:w-1/3">
            <TotalAmount total={Total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
