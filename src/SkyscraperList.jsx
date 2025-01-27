import React, { useState, useEffect } from 'react';
import Block from "./Block.jsx";

function SkyscraperList() {
    const [products, setProducts] = useState([]);

    // Fetch products
    const fetchProducts = async () => {
        const response = await fetch(`http://145.24.223.35:8005/skyscraper`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        for (let i = 0; i < data.items.length; i++) {
            console.log(data.items[i]._id)
        }
        setProducts(data.items || []);
    };

    // Delete a product
    const deleteProduct = async (_id) => {
        await fetch(`http://145.24.223.35:8005/skyscraper/${_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        setProducts(products.filter(product => product._id !== _id));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Block
                            key={product._id}
                            block={product}
                            onDelete={deleteProduct}
                        />
                    ))
                ) : (
                    <p>Loading skyscrapers...</p>
                )}
            </section>
        </div>
    );
}

export default SkyscraperList;
