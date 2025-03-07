import { useEffect, useState } from "react";
import Card from "./productCard";

function CategoryItems({ category }) {
    const [productsData, setProducts] = useState([]);

    useEffect(() => {
        if (!category) return; // ✅ Prevent fetch if category is undefined

        const fetchProducts = async () => {
            try {
                const resp = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await resp.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]); // ✅ Added dependency on category

    return (
        <div id={category}>
            <h1 className="font-roboto mt-4 text-4xl font-semibold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">{category.toUpperCase()}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {productsData.length > 0 ? (
                    productsData.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading products...</p>
                )}
            </div>
        </div>
    );
}

export default CategoryItems;
