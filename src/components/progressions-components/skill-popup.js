import React from 'react'

const skillPopup = (name, image, description) => {
    return (
        <div className='justify-center'>
            <div className='absolute right-8 top-1 w-[1.5rem] h-[1.5rem] opacity-40 hover:opacity-100'>
                <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform rotate-45'></div>
                <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform -rotate-45'></div>
            </div>
            <h2 className='text-6xl'>${name}</h2>
            <img src={image} alt={name} className='object-cover w-[90%] max-h-[70%]' />
            <div id="difficulty-bar"></div>
            <p>${description}</p>
        </div>
    );
}

export default skillPopup;