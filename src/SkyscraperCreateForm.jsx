import FormComponent from "./FormComponent.jsx";
import React from "react";
import { useNavigate } from "react-router";

function SkyscraperCreateForm() {
    const navigate = useNavigate();

    const handleSave = async (newData) => {
        try {
            const response = await fetch('http://145.24.223.35:8005/skyscraper/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            if (response.status === 201) {
                const createdResource = await response.json();
                navigate(`/skyscraper/${createdResource.id}`);
            } else {
                console.error('Failed to create resource');
            }
        } catch (error) {
            console.error('Error during request:', error);
        }
    };

    return <FormComponent onSave={handleSave} />;
}

export default SkyscraperCreateForm;
