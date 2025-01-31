import { ShoppingCart } from "lucide-react";

function productCard() {
    return (
        <div className="p-4 m-2 bg-white shadow-md rounded-lg w-64 border-2 border-gray-200 text-center items-center justify-center hover:shadow-lg trasition-all font-display">
            <div className="h-40 flex justify-center item-center">
                <img
                    src="https://picsum.photos/200/300"
                    alt="Product_img"
                    className="h-full rounded-lg w-3/4"
                />
            </div>
            <div className="mt-5 font-display">
                <h2 className="text-3xl">Name</h2>
                <h3 className="text-lg mt-2 font-medium">Price: 50</h3>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 text-white rounded-md flex gap-3 px-3 py-1 items-center justify-center hover:bg-blue-600 transition">
                        <ShoppingCart size={18} /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
export default productCard;
