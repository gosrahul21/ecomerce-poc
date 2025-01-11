import "./App.css";
import axios from "axios";
import { useRef } from "react";

function App() {
    const razorpayRef = useRef<any>(null); // Ref for Razorpay instance

    async function loadScript(src: string) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        // Load Razorpay SDK if not already loaded
        if (!razorpayRef.current) {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
        }

        // Fetch payment order details
        const result = await axios.post("http://localhost:3001/payments/create", { amount: 1000 });

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id } = result.data;

        const options = {
            key: "rzp_test_vOBPxEP10aSVeo", // Replace with your Razorpay Key ID
            name: "Soumya Corp.",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response: any) {
                const result = await axios.post(
                    "http://localhost:3001/payments/payment-verify",
                    response
                );
                alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "7004572140",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        // Initialize Razorpay instance if not already initialized
        if (!razorpayRef.current) {
            razorpayRef.current = new (window as any).Razorpay(options);
        } else {
            // Update Razorpay options if already initialized
            razorpayRef.current.options = options;
        }

        razorpayRef.current.open();
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Buy React now!</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </header>
        </div>
    );
}

export default App;
