// src/components/PaymentSection/PaymentSection.tsx
import React from "react";
import axios from "axios";

interface PaymentSectionProps {
    total: number;
    onPaymentSuccess: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ total, onPaymentSuccess }) => {
    const handlePayment = async () => {
        const result = await axios.post("http://localhost:3001/payments/create", {
            amount: total * 100, // Convert to paisa
        });

        if (!result) {
            alert("Server error. Try again later.");
            return;
        }

        const { id: order_id } = result.data;

        const options = {
            key: "rzp_test_vOBPxEP10aSVeo",
            amount: total * 100,
            currency: "INR",
            name: "E-Shop",
            description: "Order Payment",
            order_id,
            handler: async (response: any) => {
                const verifyResult = await axios.post("http://localhost:3001/payments/payment-verify", response);
                if (verifyResult.data.success) {
                    onPaymentSuccess();
                } else {
                    alert("Payment verification failed.");
                }
            },
            prefill: {
                name: "User Name",
                email: "user@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="mt-6">
            <button
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
                onClick={handlePayment}
            >
                Pay ₹{total}
            </button>
        </div>
    );
};

export default PaymentSection;
