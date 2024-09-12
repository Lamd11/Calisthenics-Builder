import React, { useState, useEffect } from "react";

import ArticleBox from "./article-box";

const ResourcesMain = () => {

    const apiKey = "6df90f8539614bdc9c37e12e2edbafdb";

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://newsapi.org/v2/everything?q=exercise&apiKey=${apiKey}`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data')
            }
        }
        fetchData();
    }, []);



    return (
        <div className=" flex flex-col p-8 justify-center align-center items-center">
            <h1 className="text-3xl text-center font-bold mb-8">News</h1>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                {articles.map((article, index) => (
                    <ArticleBox 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        image={article.urlToImage}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default ResourcesMain;

