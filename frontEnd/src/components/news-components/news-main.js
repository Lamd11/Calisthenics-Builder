import React, { useState, useEffect } from "react";

import ArticleBox from "./article-box";

const NewsMain = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const fetchNews = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data')
            }
        };
        fetchNews();
    }, []);




    return (
        <div className="align-center flex flex-col items-center justify-center p-8">
            <h1 className="mb-8 text-center text-3xl font-bold">News</h1>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {articles
                    .filter(article => article.title && article.description && article.url && article.urlToImage)
                    .map((article) => (
                        <ArticleBox
                            key={article.url}  // Using article URL as a unique key
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

