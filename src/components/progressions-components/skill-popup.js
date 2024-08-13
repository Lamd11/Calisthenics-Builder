import React from 'react'

const SkillPopup = ({ skill, onClose }) => {
    if (!skill) return null;

    return (
        <div 
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            onClick={onClose}>
            <div 
                className='bg-white p-4 rounded-md relative overflow-y-auto w-[80%] max-h-[90%]'
                onClick={(e) => e.stopPropagation()}>
                <div
                    className='absolute right-8 top-1 w-[1.5rem] h-[1.5rem] opacity-40 hover:opacity-100'
                    onClick={onClose}>
                    <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform rotate-45'></div>
                    <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform -rotate-45'></div>
                </div>
                <div className='items-center text-center flex flex-col'>
                    <h2 className='text-6xl'>{skill.name}</h2>
                    <img src={skill.image} alt={skill.name} className='object-cover w-[60%] max-h-[40%]' />
                    <div id="difficulty-bar"></div>
                    <p>${skill.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillPopup;