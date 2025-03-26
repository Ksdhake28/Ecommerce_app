import { useCart } from '../hooks/useCart';
import Sidebar from "../components/common/layout/Sidebar";
import CartStrip from "../components/cart/CartStrip";
import TotalAmount from "../components/cart/TotalAmount";

function Cart() {
    const { cartItems, total, removeFromCart, updateQuantity } = useCart();

    return (
        <div className="flex">
            <Sidebar className="w-1/4" />
            <div className="flex-1 bg-gray-100 p-6">
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
                                    {...product}
                                    onRemove={removeFromCart}
                                    onQtyChange={(qty) => updateQuantity(product.id, qty)}
                                    qty={product.qty}
                                />
                            ))
                        )}
                    </div>
                    <div className="w-full lg:w-1/3">
                        <TotalAmount total={total} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
