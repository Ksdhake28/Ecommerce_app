import { PanelLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

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

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const handleCategoryClick = (category) => {
        navigate(`/categories#${category}`, { state: { selectedCategory: category } });
    };

    return (
        <div className="w-64 h-screen py-6 bg-[#1E3A8A] text-[#F3F4F6] font-display text-center shadow-lg">
            
            {/* Sidebar Title */}
            <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 text-[#FACC15]">
                <PanelLeft size={24} />
                Explore Categories
            </h2>

            {/* Category List */}
            <ul className="mt-6 text-lg space-y-3">
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#FACC15] hover:text-[#1E3A8A] transition duration-200"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {capitalizeFirstLetter(category)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
