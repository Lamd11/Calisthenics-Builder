import React from 'react'

const SkillCard = ({ name, image, onClick }) => {
    return (
        <div className='bg-blue-50 text-black flex flex-col rounded-lg shadow-sm hover:scale-105 transition-all duration-200 ease-out cursor-pointer' onClick={onClick}>
            <img src={image} alt={name} className='object-fit' />
            <h2 className='text-2xl text-center'>{name}</h2>
        </div>
    );
}

export default SkillCard;