import React, { useState, useEffect } from 'react';
import Block from "./Block.jsx";

function SkyscraperList() {
    const [products, setProducts] = useState([]);
    const [filterInputTitle, setFilterInputTitle] = useState('');
    const [filterInputCategory, setFilterInputCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]); // Gefilterde producten

    const fetchProducts = async () => {
        const response = await fetch(`http://145.24.223.35:8005/skyscraper`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setProducts(data.items || []);
        setFilteredProducts(data.items || []); // Initialiseer filteredProducts met alle producten
    };

    const deleteProduct = async (_id) => {
        await fetch(`http://145.24.223.35:8005/skyscraper/${_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        const updatedProducts = products.filter(product => product._id !== _id);
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts); // Update filteredProducts na verwijdering
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                (filterInputTitle === '' || product.title.includes(filterInputTitle)) &&
                (filterInputCategory === '' || product.category.includes(filterInputCategory))
            )
        );
    }, [filterInputTitle, filterInputCategory, products]);

    const editForm = (event) => {
        const value = event.target.value;

        if (event.target.name === 'title') {
            setFilterInputTitle(value);
        } else if (event.target.name === 'category') {
            setFilterInputCategory(value);
        }
    };

    return (
        <div>
            <form className="bg-lime-150 shadow-md rounded-lg p-6 mb-8">
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                        Filter title:
                    </label>
                    <input
                        name="title"
                        value={filterInputTitle}
                        onInput={editForm}
                        placeholder="Filter by title..."
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                        Category:
                    </label>
                    <select
                        name="category"
                        value={filterInputCategory}
                        onChange={editForm}
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All categories</option>
                        <option value="0">Skyscraper</option>
                        <option value="1">Super Tall</option>
                        <option value="2">Mega Tall</option>
                    </select>
                </div>
            </form>


            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Block
                            key={product._id}
                            block={product}
                            onDelete={deleteProduct}
                        />
                    ))
                ) : (
                    <p>Geen resultaten gevonden...</p>
                )}
            </section>
        </div>
    );
}

export default SkyscraperList;
