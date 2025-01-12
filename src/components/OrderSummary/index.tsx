// src/components/OrderSummary/OrderSummary.tsx
import React from "react";

interface OrderSummaryProps {
    cart: { id: number; name: string; price: number; quantity: number }[];
    total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart, total }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="divide-y">
                {cart.map((item) => (
                    <li key={item.id} className="py-2 flex justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>₹{item.price * item.quantity}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 text-lg font-semibold flex justify-between">
                <span>Total:</span>
                <span>₹{total}</span>
            </div>
        </div>
    );
};

export default OrderSummary;
