import { useNavigate } from "react-router-dom";


const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <section className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to E-Shop</h1>
                <p className="text-lg md:text-2xl mb-6">Your one-stop shop for everything you love!</p>
                <button onClick={()=>navigate('/products')} className="px-6 py-3 bg-pink-500 hover:bg-pink-700 text-white rounded-lg text-lg transition-all">Shop Now</button>
            </div>
        </section>
    );
};

export default HeroSection;