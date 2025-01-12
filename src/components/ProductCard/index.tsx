// src/components/ProductCard/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onAddToCart,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">₹{price}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
