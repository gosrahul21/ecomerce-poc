// src/components/Navbar/Navbar.tsx


const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-pink-500 to-red-400 text-white py-4 px-6 flex justify-between items-center">
            <div className="text-xl font-bold">E-Shop</div>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-pink-200">Home</a></li>
                <li><a href="#products" className="hover:text-pink-200">Products</a></li>
                <li><a href="/orders" className="hover:text-pink-200">Orders</a></li>
                <li><a href="/cart" className="hover:text-pink-200">Cart</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;