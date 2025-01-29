import React, { createContext, useState, useEffect } from 'react';

export const SkyscraperContext = createContext();

export const SkyscraperProvider = ({ children }) => {
    const [skyscrapers, setSkyscrapers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSkyscrapers = async () => {
        try {
            const response = await fetch('http://145.24.223.35:8005/skyscraper/');
            const data = await response.json();
            setSkyscrapers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching skyscrapers:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkyscrapers();
    }, []);

    const addSkyscraper = async (newSkyscraper) => {
        try {
            const response = await fetch('http://145.24.223.35:8005/skyscraper/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSkyscraper),
            });

            if (response.ok) {
                const createdSkyscraper = await response.json();
                setSkyscrapers((prev) => [...prev, createdSkyscraper]);
            }
        } catch (error) {
            console.error('Error adding skyscraper:', error);
        }
    };

    return (
        <SkyscraperContext.Provider value={{ skyscrapers, loading, addSkyscraper }}>
            {children}
        </SkyscraperContext.Provider>
    );
};
