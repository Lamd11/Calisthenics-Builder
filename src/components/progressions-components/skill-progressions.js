import React from 'react';

const SkillProgression = ({ progressions }) => {

    const levelColor = (level) =>{
        if(level >= 14){
            return 'bg-red-500';
        }
        else if (level >= 10){
            return 'bg-orange-500'
        }
        else if (level >= 6){
            return 'bg-green-500'
        }
        else {
            return 'bg-blue-500'
        }
    }

    return (
        <div className="mt-6">
            <h3 className="text-2xl mb-4 font-bold">Progression Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {progressions.map(([name, level], index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md">
                        <span className="text-xl font-semibold">{name}</span>
                        <span className="mt-2 text-lg">Level {level}</span>
                        <div className={`mt-2 w-full h-2 rounded-full ${levelColor(level)}`} style={{ width: `${(level / progressions.length) * 100}%` }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillProgression;
