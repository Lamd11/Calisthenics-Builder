import React from 'react'

const SkillCard = ({ name, image, type, difficulty, onClick }) => {

    const difficultyString = (difficulty) => {
        if (difficulty >= 14) {
            return (
                <span className=" text-red-500 text-2xl">Elite</span>
            );
        }
        else if (difficulty >= 10) {
            return (
                <span className=" text-orange-500">Elite</span>
            );
        }
        else if (difficulty >= 6) {
            return (
                <span className=" text-green-500">Elite</span>
            );
        }
        else {
            return (
                <span className=" text-blue-500">Elite</span>
            );
        }
    }

    return (
        <div className='bg-blue-50 text-black flex flex-col rounded-lg shadow-sm hover:scale-105 hover:bg-blue-200 transition-all duration-200 ease-out cursor-pointer' onClick={onClick}>
            <img 
                src={image} 
                alt={name} 
                className='h-64 w-full object-cover rounded-t-lg' />
            <div className='p-4'>
                <h2 className='text-2xl font-bold mb-2'>{name}</h2>
                <h3 className='text-lg font-semibold mb-2'>Difficulty: {difficultyString(difficulty)}</h3>
                <p className='text-m mb-2'>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            </div>

        </div>
    );
}

export default SkillCard;