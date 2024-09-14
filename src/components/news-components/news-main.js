import React, { useState, useEffect } from "react";
import ArticleBox from "./article-box";

const NewsMain = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getNews');
                
                // Check if the response is okay
                if (!response.ok) {
                    throw new Error(`Failed to fetch articles: ${response.status} - ${response.statusText}`);
                }
                
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col p-8 justify-center align-center items-center">
            <h1 className="text-3xl text-center font-bold mb-8">News</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <ArticleBox
                            key={index}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            image={article.urlToImage}
                        />
                    ))
                ) : (
                    <p>No articles available</p>
                )}
            </div>
        </div>
    );
}

export default NewsMain;
