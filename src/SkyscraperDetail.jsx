import { useNavigate, useParams, Link } from "react-router";
import React, { useEffect, useState } from "react";

function SkyscraperDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        const response = await fetch(`http://145.24.223.35:8005/skyscraper/${params.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 500) {
            navigate(`/skyscraper/pagenotfound`);
            return;
        }

        const data = await response.json();
        setProduct(data);
    };

    const handleDelete = async () => {
        await fetch(`http://145.24.223.35:8005/skyscraper/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        navigate(`/skyscraper`);
    };

    const handleFavorite = async () => {
        try {
            const response = await fetch(`http://145.24.223.35:8005/skyscraper/favo/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setProduct(prevProduct => ({
                    ...prevProduct,
                    favorite: prevProduct.favorite === 'true' ? 'false' : 'true'
                }));
            }
        } catch (error) {
            console.error('Error updating favorite status:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    if (!product) {
        return <p className="text-center mt-10 text-gray-600">Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Skyscraper Details</h1>
            <div className="space-y-4 text-lg text-gray-700">
                <div>
                    <span className="font-semibold">Title:</span> {product.title}
                </div>
                <div>
                    <span className="font-semibold">Description:</span> {product.description}
                </div>
                <div>
                    <span className="font-semibold">City:</span> {product.city}
                </div>
                <div>
                    <span className="font-semibold">Category:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">Height:</span> {product.height} meters
                </div>
            </div>


            <div className="flex items-center justify-between gap-4 mt-6">
                <Link
                    to={`/skyscraper/edit/${params.id}`}
                    className="flex-1 py-2 px-4 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Edit
                </Link>
                <button
                    onClick={handleDelete}
                    className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Delete
                </button>
                <button
                    onClick={handleFavorite}
                    className={`flex-1 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:opacity-80 transition duration-300`}
                >
                    {product.favorite === 'true' ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>

            <button
                onClick={() => navigate(`/skyscraper`)}
                className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Back to Skyscrapers
            </button>
        </div>
    );
}

export default SkyscraperDetail;
