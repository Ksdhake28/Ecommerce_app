import { useState, useEffect } from "react";
import Card from "../components/productCard";
import SearchBar from "../components/Searchbar";
import Catbutton from "../components/categorybutton";
import { useNavigate } from "react-router-dom";

function Home({addToCart}) {
    const [productsData, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResp, categoriesResp] = await Promise.all([
                    fetch("https://fakestoreapi.com/products"),
                    fetch("https://fakestoreapi.com/products/categories")
                ]);
                
                const productsData = await productsResp.json();
                const categoriesData = await categoriesResp.json();
                
                setProducts(productsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const filteredProducts = productsData
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
            selectedCategory === "all" ? true : product.category === selectedCategory
        );

    return (
        <>
            <div className="flex justify-center items-center gap-4 mb-6">
                <SearchBar onSearch={handleSearch} />
                <select
                    value = {selectedCategory}
                    onChange={handleCategoryChange}
                    className="p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="all"> All Categories </option>
                    {categories.map((category) => (
                            <option key={category} value={category} >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                </select>
                <Catbutton />
            </div>
            <div className="flex flex-wrap justify-around">
                {filteredProducts.length === 0 ? (
                    <div className="text-xl text-gray-600">No Products Found</div>
                ) : (
                    filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            addToCart={addToCart}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default Home;
