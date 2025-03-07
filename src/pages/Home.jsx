import { useState, useEffect } from "react";
import Card from "../components/productCard";
import SearchBar from "../components/Searchbar";
import Catbutton from "../components/categorybutton";
import { useNavigate } from "react-router-dom";

function Home({addToCart}) {
    const [productsData, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resp = await fetch("https://fakestoreapi.com/products");
                let productsData = await resp.json();
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center">
                {" "}
                <SearchBar /> <Catbutton />{" "}
            </div>
            <div className="flex flex-wrap justify-around">
                {productsData.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </>
    );
}
export default Home;
