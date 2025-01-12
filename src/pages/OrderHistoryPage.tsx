// src/pages/OrderHistoryPage.tsx

import Navbar from "../components/Navbar/Navbar";
import OrderList from "../components/Order/OrderList";


const OrderHistoryPage = () => {
    const orders = [
        {
            id: "ORD123",
            date: "2025-01-10",
            total: 7998,
            status: "Delivered",
            items: [
                { name: "Wireless Headphones", price: 2999, quantity: 1 },
                { name: "Smart Watch", price: 4999, quantity: 1 },
            ],
        },
        {
            id: "ORD124",
            date: "2025-01-08",
            total: 2999,
            status: "Cancelled",
            items: [{ name: "Bluetooth Speaker", price: 2999, quantity: 1 }],
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <OrderList orders={orders} />
            </div>
        </div>
    );
};

export default OrderHistoryPage;
