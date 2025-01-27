import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router";
import FormComponent from "./FormComponent.jsx";

function SkyscraperEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async () => {
        try {
            console.log(id);
            const response = await fetch(`http://145.24.223.35:8005/skyscraper/${id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch product:", error);
            setLoading(false);
        }
    };

    // Update product data
    const handleSave = async (updatedProduct) => {
        console.log('it is edited')
        await fetch(`http://145.24.223.35:8005/skyscraper/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        navigate(`/skyscraper/${updatedProduct._id}`);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Skyscraper</h1>
            <FormComponent initialValues={product} onSave={handleSave}/>
        </div>
    );
}

export default SkyscraperEdit;
