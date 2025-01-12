// src/components/OrderList/OrderList.tsx
import React, { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";


interface Order {
    id: string;
    date: string;
    total: number;
    status: string;
    items: { name: string; price: number; quantity: number }[];
}

interface OrderListProps {
    orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <ul className="divide-y">
                {orders.map((order) => (
                    <li
                        key={order.id}
                        className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 px-4"
                        onClick={() => setSelectedOrder(order)}
                    >
                        <span>
                            <strong>Order ID:</strong> {order.id}
                        </span>
                        <span>
                            <strong>Date:</strong> {order.date}
                        </span>
                        <span>
                            <strong>Total:</strong> ₹{order.total}
                        </span>
                        <span>
                            <strong>Status:</strong> {order.status}
                        </span>
                    </li>
                ))}
            </ul>
            {selectedOrder && (
                <OrderDetailsModal
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />
            )}
        </div>
    );
};

export default OrderList;
