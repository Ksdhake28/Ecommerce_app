import { useEffect, useState } from "react";
import { Plus, Minus } from 'lucide-react';

function QtySetter({ onQtyChange, productID }){

    let [qty, setQty] = useState(1);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        const productInCart = storedCart.find((item) => item.id === productID);
        if(productInCart){
            setQty(productInCart.qty);
        }
    },[productID])

    const updateCartQty = (newQty) => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []

        let updatedCart = storedCart.map((item) => {
            if(item.id == productID){
                return {...item, qty:newQty}
            }
            return item;
        })

        if(newQty == 0){
            updatedCart = updatedCart.filter((item) => item.id !== productID) 
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const handelClick = (action) => {
        setQty(prevqty => {
            let newQty = prevqty; // Start with the current quantity
    
            if (action === "decrement" && newQty > 0) {
                newQty = prevqty - 1;
            } else if (action === "increment") {
                newQty = prevqty + 1;
            }
    
            updateCartQty(newQty);
            onQtyChange(newQty); // Notify Parent Component with the updated qty
            
            return newQty; // Update state correctly
        });
    };
    

    return(
        <div className="flex justify-around border-1 border-blue-950 rounded w-24 bg-blue-500 text-white">
            <button id="decrement" onClick={() => handelClick("decrement")} className="cursor-pointer"><Minus size={18}/></button>
            <p className="text-black  bg-white w-8 flex items-center justify-center">{qty}</p>
            <button id="increment" onClick={() => handelClick("increment")} className="cursor-pointer"><Plus size={18}/></button>
        </div>
    );
}
export default QtySetter;