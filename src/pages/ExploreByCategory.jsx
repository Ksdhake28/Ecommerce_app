import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryItems from "../components/CategoryItems";

function ExploreByCategory() {
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const selectedCategory = location.state?.selectedCategory || null; // Get category from state

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        
        fetchCategories();
    }, []);

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index} id={category} className={selectedCategory === category ? "bg-gray-200 p-4 rounded-md" : ""}>
                    <CategoryItems category={category} />
                </div>
            ))}
        </div>
    );
}

export default ExploreByCategory;
