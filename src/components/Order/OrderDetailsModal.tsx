// src/components/OrderDetailsModal/OrderDetailsModal.tsx
import React from "react";

interface OrderDetailsModalProps {
    order: {
        id: string;
        date: string;
        total: number;
        status: string;
        items: { name: string; price: number; quantity: number }[];
    };
    onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <button
                    className="text-red-500 font-bold float-right"
                    onClick={onClose}
                >
                    Close
                </button>
                <h2 className="text-xl font-bold mb-4">Order Details</h2>
                <p>
                    <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                    <strong>Date:</strong> {order.date}
                </p>
                <p>
                    <strong>Total:</strong> ₹{order.total}
                </p>
                <p>
                    <strong>Status:</strong> {order.status}
                </p>
                <h3 className="text-lg font-semibold mt-4">Items:</h3>
                <ul className="divide-y">
                    {order.items.map((item, index) => (
                        <li key={index} className="py-2 flex justify-between">
                            <span>
                                {item.name} (x{item.quantity})
                            </span>
                            <span>₹{item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderDetailsModal;
