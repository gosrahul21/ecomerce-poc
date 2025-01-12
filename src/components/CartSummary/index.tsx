// src/components/CartSummary/CartSummary.tsx
import React from "react";

interface CartSummaryProps {
    total: number;
    onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <p className="text-lg font-semibold mb-4">Total: ₹{total}</p>
            <button
                className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-700 transition-all"
                onClick={onCheckout}
            >
                Checkout
            </button>
        </div>
    );
};

export default CartSummary;
