import React, { useEffect, useState } from 'react';

function FormComponent({ initialValues, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        city: '',
        category: '',
        height: ''
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSave) {
            onSave(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-lime-150 shadow-md rounded-lg p-6 space-y-6">
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Description:
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                    City:
                </label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Category:
                </label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="0">Skyscraper</option>
                    <option value="1">Super Tall</option>
                    <option value="2">Mega Tall</option>
                </select>
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Height:
                </label>
                <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
            >
                Submit
            </button>
        </form>
    );
}

export default FormComponent;
