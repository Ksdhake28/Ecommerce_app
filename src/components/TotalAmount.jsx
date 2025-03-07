import { useNavigate } from "react-router-dom";

function TotalAmount({ total }) {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/checkout")
    }

    return (
        <div className="border rounded-lg bg-white w-full max-w-md mt-4 shadow-lg p-4">
            <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>
            <div className="flex justify-between mb-6">
                <span className="text-lg">Total Amount:</span>
                <span className="text-lg font-bold">₹ {total.toFixed(2)}</span>
            </div>
            <button onClick={handleClick}  className="bg-green-500 hover:bg-green-600 w-full rounded text-white py-2 px-4 text-lg transition duration-200 cursor-pointer">
                Proceed to checkout
            </button>
        </div>
    );
}

export default TotalAmount;
