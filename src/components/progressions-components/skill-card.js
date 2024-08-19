import React from 'react'

const SkillCard = ({ name, image, onClick }) => {
    return (
        <div className='bg-[#081320] text-white p-0 m-[20px] w-[350px] h-[280px] cursor-pointer' onClick={onClick}>
            <h2 className='h-[15%] text-2xl text-center'>{name}</h2>
            <img src={image} alt={name} className='object-fit w-[350px] h-[85%]' />
        </div>
    );
}

export default SkillCard;