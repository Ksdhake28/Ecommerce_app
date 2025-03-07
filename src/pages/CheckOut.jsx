import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function CheckOut() {
    const [formData, setFormData] = useState({
        name: "",
        mobNumber: "",
        email: "",
        add: ""
    });
    const [orderStatus, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setStatus(true);
            setLoading(false);
        }, 1500); // Simulating order processing
    };

    return (
        <div className='max-w-xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10 border border-gray-200'>
            {orderStatus ? (
                <div className='flex flex-col items-center bg-green-100 text-center p-6 rounded-2xl shadow-md'>
                    <FaCheckCircle className='text-green-600 text-5xl mb-2' />
                    <h2 className='font-bold text-3xl text-gray-800'>Order Confirmed!</h2>
                    <p className='text-gray-600 mt-2'>Your order has been successfully placed. A confirmation email will be sent shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <h2 className='text-4xl font-extrabold text-center text-gray-800'>Checkout</h2>
                    
                    <div className='space-y-2'>
                        <label htmlFor='name' className='block text-lg font-semibold text-gray-700'>Full Name</label>
                        <input id='name' name='name' type='text' value={formData.name} onChange={handleInputChange} required 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none' />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='mobNumber' className='block text-lg font-semibold text-gray-700'>Contact Number</label>
                        <input id='mobNumber' name='mobNumber' type='tel' value={formData.mobNumber} onChange={handleInputChange} required 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none' />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='email' className='block text-lg font-semibold text-gray-700'>Email</label>
                        <input id='email' name='email' type='email' value={formData.email} onChange={handleInputChange} required 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none' />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='address' className='block text-lg font-semibold text-gray-700'>Address</label>
                        <textarea id='address' name='add' value={formData.add} onChange={handleInputChange} required 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none h-24'></textarea>
                    </div>
                    
                    <div className='flex justify-center'>
                        <button type='submit' className='w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 shadow-md flex items-center justify-center'
                            disabled={loading}>
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default CheckOut;
