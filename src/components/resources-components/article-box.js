import React from "react";

const ArticleBox = ({ title, description, url, image }) => {
    return(
        <div className='bg-blue-50 dark:bg-slate-400 dark:text-black flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-blue-300 transition-all duration-200 ease-out max-w-sm'>
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm mb-4">{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
            </div>
        </div>
    );
}

export default ArticleBox;
