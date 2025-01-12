// src/components/ProductGrid/ProductGrid.tsx
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

const ProductGrid = () => {
    const navigate = useNavigate()
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 2999,
            image: "/images/headphones.jpg",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 4999,
            image: "/images/smartwatch.jpg",
        },
        {
            id: 3,
            name: "Gaming Mouse",
            price: 1999,
            image: "/images/mouse.jpg",
        },
    ];

    const handleAddToCart = (productId: number) => {
        console.log(`Added product ${productId} to cart`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    onAddToCart={() => handleAddToCart(product.id)}
                    onClick = {()=>navigate(`/products/${product.id}`)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
