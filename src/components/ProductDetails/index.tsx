// src/components/ProductDetails/ProductDetails.tsx
import React from "react";

interface ProductDetailsProps {
    name: string;
    description: string;
    price: number;
    image: string;
    onAddToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ name, description, price, image, onAddToCart }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-6">
            <img
                src={image}
                alt={name}
                className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            />
            <div className="flex flex-col text-gray-800">
                <h1 className="text-3xl font-bold mb-4">{name}</h1>
                <p className="text-lg mb-6">{description}</p>
                <p className="text-xl font-semibold mb-6">Price: ₹{price}</p>
                <button
                    onClick={onAddToCart}
                    className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-all"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
