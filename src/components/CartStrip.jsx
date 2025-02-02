import QtySetter from "./QtySetter";

function CartStrip(product, {onRemove}) {

    const handleClick = (qty) =>{
        if( qty === 0){
            onRemove(product.id)
        }
    }

    return (
        <div className="flex gap-5 border-2 border-gray-500 rounded-md p-4 mt-4 w-3/5 shadow-md text-xl font-display">
            <img
                src={product.image}
                alt="Product image"
                className="rounded-lg h-40 w-40"
            />
            <div className="flex-1 pl-5 flex flex-col justify-evenly">
                <h1 className="text-2xl">{product.title}</h1>

                <QtySetter onQtyChange={handleClick} productID={product.id} />
                
                <div className="flex items-center gap-5">
                    <h3>Price:</h3>
                    <h3>{product.price}</h3>
                </div>
                
            </div>
        </div>
    );
}

export default CartStrip;
