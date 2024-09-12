import React from 'react'

const SkillCard = ({ name, image, type, difficulty, description, onClick }) => {

    const difficultyString = (difficulty) => {
        if (difficulty >= 14) {
            return (
                <span className=" text-red-500 text-2xl">Elite</span>
            );
        }
        else if (difficulty >= 10) {
            return (
                <span className=" text-orange-500">Advanced</span>
            );
        }
        else if (difficulty >= 6) {
            return (
                <span className=" text-green-500">Intermediate</span>
            );
        }
        else {
            return (
                <span className=" text-blue-500">Beginner</span>
            );
        }
    }

    const slicedDescription = (description) => {
        var str = description;
        if(str.length > 250) str = str.substring(0,250);
        return str;
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
                <h4 className='text-m mb-2 font-semibold'>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <p className='text-sm'>{slicedDescription(description)}...</p>
            </div>

        </div>
    );
}

export default SkillCard;