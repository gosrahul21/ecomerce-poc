// src/pages/ProductListingPage.tsx
import Navbar from "../components/Navbar/Navbar";
import ProductGrid from "../components/ProductGrid";

const ProductListingPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold text-center mt-6">Products</h1>
            <ProductGrid />
        </div>
    );
};

export default ProductListingPage;
