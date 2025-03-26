const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
};

export const fetchProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return response.json();
};

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    return response.json();
};

export const fetchProductsByCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    return response.json();
};