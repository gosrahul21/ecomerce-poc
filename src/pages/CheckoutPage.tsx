// src/pages/CheckoutPage.tsx
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import OrderSummary from "../components/OrderSummary";
import ShippingForm from "../components/ShippingForm";
import PaymentSection from "../components/Payment/PaymentSection";

const CheckoutPage = () => {
    const [cart] = useState([
        { id: 1, name: "Wireless Headphones", price: 2999, quantity: 1 },
        { id: 2, name: "Smart Watch", price: 4999, quantity: 1 },
    ]);
    const [shippingDetails, setShippingDetails] = useState(null);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleShippingSubmit = (details: any) => setShippingDetails(details);
    const handlePaymentSuccess = () => {
        alert("Payment successful!");
        console.log("Order Details:", { cart, shippingDetails });
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <OrderSummary cart={cart} total={total} />
                {!shippingDetails ? (
                    <ShippingForm onShippingSubmit={handleShippingSubmit} />
                ) : (
                    <PaymentSection total={total} onPaymentSuccess={handlePaymentSuccess} />
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
