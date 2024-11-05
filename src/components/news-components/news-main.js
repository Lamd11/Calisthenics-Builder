import React, { useState, useEffect } from "react";

import ArticleBox from "./article-box";

const NewsMain = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/news-route');
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data')
            }
        }
        fetchData();
    }, []);



    return (
        <div className="align-center flex flex-col items-center justify-center p-8">
            <h1 className="mb-8 text-center text-3xl font-bold">News</h1>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
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

export default NewsMain;

