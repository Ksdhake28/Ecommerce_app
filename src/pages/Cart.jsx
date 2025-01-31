import SearchBar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import CartStrip from "../components/CartStrip.jsx";

function Cart() {
    return (
        <div className="flex">
            <Sidebar className="w-1/4" />
            <div className="flex-1 bg-gray-100 p-6">
                <SearchBar />
                <CartStrip />
                <CartStrip />
                <CartStrip />
            </div>
        </div>
    );
}

export default Cart;
