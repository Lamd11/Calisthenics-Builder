import React from "react";

const ArticleBox = ({ title, description, url, image }) => {

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return(
        <div 
            className='bg-blue-50 dark:text-black flex flex-col rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-300 transition-all duration-200 ease-out cursor-pointer max-w-sm'
            onClick={() => handleClick(url)}>
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm mb-4">{description}</p>
            </div>
        </div>
    );
}

export default ArticleBox;
