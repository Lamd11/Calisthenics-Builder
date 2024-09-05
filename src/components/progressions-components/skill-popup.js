import React from 'react';
import MuscleTable from './muscle-table';
import DifficultyLegend from './difficulty-legend';
import SkillProgression from './skill-progressions';
import DifficultyTitle from './difficulty-title';
import MusclesUsed from './muscles-used';

const SkillPopup = ({ skill, onClose }) => {
    if (!skill) return null;

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            onClick={onClose}>
            <div
                className='bg-white p-8 rounded-md relative overflow-y-auto w-[80%] max-h-[90%]'
                onClick={(e) => e.stopPropagation()}>
                <div
                    className='absolute right-8 top-1 w-[1.5rem] h-[1.5rem] opacity-40 hover:opacity-100'
                    onClick={onClose}>
                    <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform rotate-45'></div>
                    <div className='absolute left-4 h-8 w-[2px] bg-gray-800 transform -rotate-45'></div>
                </div>
                <div className='items-center text-center flex flex-col bg-white'>
                    <h2 className='text-6xl font-bold text-gray-800 mb-4'>{skill.name}</h2>
                    <img src={skill.image} alt={skill.name} className='object-cover w-[60%] max-h-[40%] rounded-sm mb-6' />
                    <DifficultyTitle difficulty={skill.difficulty}/>
                    <div className='flex flex-col md:flex-row w-full justify-center gap-8 mb-12'>
                        <div className='w-full md:w-1/4'>
                            <MuscleTable muscleList={skill.muscles} />
                        </div>
                        <div className='w-full md:w-3/4'>
                            <h3 className='text-2xl font-semibold text-gray-800 text-left'>Info</h3>
                            <p className='text-gray-700 mt-4 mb-4 text-left'>{skill.description}</p>
                            <h3 className='text-2xl font-semibold text-gray-800 text-left'>Muscle Usage</h3>
                            <MusclesUsed muscles={skill.muscles_used}/>
                            <h3 className='text-2xl font-semibold text-gray-800 text-left'>How to Perform</h3>
                            <p className='text-gray-700 mt-4 text-left'>{skill.how_to}</p>
                        </div>
                    </div>
                    <h3 className="text-2xl mb-4 font-bold">Progression Steps</h3>
                    <div className='flex flex-col md:flex-row justify-between gap-4 w-full'>
                        <div className='w-full md:w-1/4'>
                            <DifficultyLegend />
                        </div>
                        <div className='w-full md:w-3/4'>
                            <SkillProgression progressions={skill.progressions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillPopup;
