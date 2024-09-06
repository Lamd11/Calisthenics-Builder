import React, { useState, useEffect } from "react";

import ArticleBox from "./article-box";

const ResourcesMain = () => {

    const apiKey = "6df90f8539614bdc9c37e12e2edbafdb";

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://newsapi.org/v2/everything?q=calisthenics&apiKey=${apiKey}`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data')
            }
        }
        fetchData();
    }, []);



    return (
        <div>
            <h1>Calisthenics News</h1>
            <div className="flex flex-wrap flex-col ml-12 mr-12 justify-center">
                {articles.map((article, index) => (
                    <ArticleBox 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default ResourcesMain;

