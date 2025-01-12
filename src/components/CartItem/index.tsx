// src/components/CartItem/CartItem.tsx
import React from "react";

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    onQuantityChange: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    price,
    quantity,
    image,
    onQuantityChange,
    onRemove,
}) => {
    return (
        <div className="flex items-center gap-6 border-b pb-4">
            <img src={image} alt={name} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600">Price: ₹{price}</p>
                <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${id}`} className="mr-2 text-gray-700">
                        Quantity:
                    </label>
                    <input
                        id={`quantity-${id}`}
                        type="number"
                        value={quantity}
                        min={1}
                        className="w-12 text-center border rounded-lg"
                        onChange={(e) => onQuantityChange(id, parseInt(e.target.value, 10))}
                    />
                </div>
            </div>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                onClick={() => onRemove(id)}
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
