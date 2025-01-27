import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import Block from "./Block.jsx";

function SkyscraperDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch(`http://145.24.223.35:8005/skyscraper/${params.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = async (_id) => {
        console.log(_id)
        await fetch(`http://145.24.223.35:8005/skyscraper/${_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        navigate(`/skyscraper`);
    };

    return (
        <>
            <h1>Welcome at Skyscraper Detail</h1>
            <Block key={products.id} block={products} onDelete={deleteProduct}></Block>
        </>
    );
}

export default SkyscraperDetail;
