import React, { useState, useEffect } from "react";
import Carousal from "./carousal";

const ResourcesMain = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./utils/resources.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const info = await response.json();
                setSlides(info);  // Corrected this line to set slides
            } catch (error) {
                console.error('Error loading the JSON file:', error);
            }
        };
        fetchData();
    }, []);

    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-center font-bold mb-8">Resources</h1>
            {slides.length > 0 ? <Carousal slides={slides} /> : <p>Loading...</p>}
        </div>
    );
}

export default ResourcesMain;
