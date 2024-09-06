import React from "react";

const ArticleBox = (title, description, url) => {
    return(
        <div className='bg-[#081320] text-white p-0 m-[20px] w-[350px] h-[280px] cursor-pointer' >
            <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
}

export default ArticleBox;