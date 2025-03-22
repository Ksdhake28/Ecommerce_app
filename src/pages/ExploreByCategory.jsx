import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryItems from "../components/CategoryItems";

function ExploreByCategory() {
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const selectedCategory = location.state?.selectedCategory || null;

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

        // Scroll to selected category if present
        if (selectedCategory) {
            const element = document.getElementById(selectedCategory);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        id={category} 
                        className={`${
                            selectedCategory === category 
                            ? "bg-blue-50 p-6 rounded-lg shadow-md" 
                            : "p-6 rounded-lg shadow-md"
                        }`}
                    >
                        <CategoryItems category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreByCategory;
