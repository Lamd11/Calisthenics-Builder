import React from "react";

const ArticleBox = ({ title, description, url, image }) => {

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return(
        <div 
            className='flex max-w-sm cursor-pointer flex-col rounded-lg bg-blue-50 shadow-sm transition-all duration-200 ease-out hover:bg-blue-300 hover:shadow-lg dark:text-black'
            onClick={() => handleClick(url)}>
            <img
                src={image}
                alt={title}
                className="h-48 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="mb-4 text-sm">{description}</p>
            </div>
        </div>
    );
}

export default ArticleBox;
