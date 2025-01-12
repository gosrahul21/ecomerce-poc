import Navbar from "../components/Navbar/Navbar";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
    const product = {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise-canceling technology for an immersive audio experience.",
        price: 2999,
        image: "/images/headphones.jpg",
    };

    const handleAddToCart = () => {
        console.log(`Added product ${product.id} to cart`);
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <ProductDetails
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                />
            </div>
        </div>
    );
};

export default ProductDetailsPage;
