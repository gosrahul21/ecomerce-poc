// src/pages/CartPage.tsx
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate()
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      quantity: 1,
      image: "/images/headphones.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      quantity: 1,
      image: "/images/smartwatch.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout')
    console.log("Proceeding to checkout with items:", cart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <CartSummary total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default CartPage;
