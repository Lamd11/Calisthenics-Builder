import React from "react";

const ArticleBox = ({title, description, url, image}) => {
    return(
        <article className='bg-blue-50 dark:bg-slate-400 dark:text-black flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-blue-300 dark:hover:bg-slate-500 transition-all duration-200 ease out' >
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover rounded-t-lg shadow-mg"
            />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"></a>
            </div>
        </article>
    );
}

export default ArticleBox;