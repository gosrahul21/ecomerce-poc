// src/components/ShippingForm/ShippingForm.tsx
import React, { useState } from "react";

interface ShippingFormProps {
    onShippingSubmit: (data: {
        name: string;
        address: string;
        phone: string;
    }) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onShippingSubmit }) => {
    const [formData, setFormData] = useState({ name: "", address: "", phone: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onShippingSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-all"
            >
                Submit
            </button>
        </form>
    );
};

export default ShippingForm;
