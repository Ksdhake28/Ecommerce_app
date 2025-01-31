function CartStrip() {
    return (
        <div className="flex gap-5 border-2 border-gray-500 rounded-md p-4 mt-4 w-3/5 shadow-md text-xl font-display">
            <img
                src="https://picsum.photos/200/300"
                alt="Product image"
                className="rounded-lg h-40 w-40"
            />
            <div className="flex-1 pl-5 flex flex-col justify-evenly">
                <h1 className="text-2xl">Name of Product</h1>

                <div className="flex gap-5 items-center my-2">
                    <h2 className="text-xl">Qty.</h2>
                    <button
                        id="decrement"
                        className="bg-gray-400 px-2 rounded-md text-2xl cursor-pointer hover:bg-gray-500"
                    >
                        {" "}
                        -{" "}
                    </button>
                    <h3>1</h3>
                    <button
                        id="increment"
                        className="bg-green-600 px-2 rounded-md text-2xl cursor-pointer hover:bg-green-400"
                    >
                        +
                    </button>
                </div>
                
                <div className="flex items-center gap-5">
                    <h3>Price:</h3>
                    <h3>500</h3>
                </div>
                
            </div>
        </div>
    );
}

export default CartStrip;
