import React from "react";

const MuscleTable = ({ muscleList = [] }) => {
    return (
        <div className='mt-6 bg-white rounded-lg p-4 text-center shadow-lg'>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Muscle Groups</h3>
            <div className="flex flex-col gap-4">
                {muscleList.map((muscleGroup, index) => {
                    // The first element is the category (e.g., "Back"), the rest are specific muscles
                    const [category, ...muscles] = muscleGroup;

                    return (
                        <div key={index} className="text-left">
                            <h4 className="text-xl font-semibold text-blue-600">{category}</h4>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                {muscles.map((muscle, idx) => (
                                    <li key={idx}>{muscle}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MuscleTable;
