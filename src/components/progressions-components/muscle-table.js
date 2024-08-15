import React from "react";

const MuscleTable = (muscleList) => {
    <div className='mt-6 bg-white-500 rounded-lg p-4 text-center shadow-lg'>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Muscle Groups</h3>
        <div className="flex flex-col gap-4">
            {muscleList.map((muscle, index) => {
               
            })}
        </div>
    </div>
}


export default MuscleTable;