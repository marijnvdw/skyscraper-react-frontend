import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";


function FormComponent({initialValues, onSave }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        city: '',
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log('Formulier verzonden:', formData);
    //     try {
    //         const response = await fetch('http://145.24.223.35:8005/skyscraper/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //
    //         if (response.status === 201) {
    //             const newResource = await response.json();
    //             console.log('Resource toegevoegd:', newResource);
    //             console.log(newResource);
    //             navigate(`/skyscraper/${newResource.id}`)
    //
    //         } else {
    //             console.error('Fout bij toevoegen van resource');
    //         }
    //     } catch (error) {
    //         console.error('Fout bij het versturen van het verzoek:', error);
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSave) {
            onSave(formData); // Pass form data to the onSave function
        }
    };

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Verzenden</button>
            </form>

    );
}

export default FormComponent;
