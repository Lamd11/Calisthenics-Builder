import React, { useEffect } from "react";

const ResourcesMain = () => {

    const apiKey = "6df90f8539614bdc9c37e12e2edbafdb";

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://newsapi.org/v2/everything?q=calisthenics&apiKey=${apiKey}`);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data')
            }
        }
        fetchData();
    }, []);



    return(
        <div>

        </div>
    );
}

export default ResourcesMain;

