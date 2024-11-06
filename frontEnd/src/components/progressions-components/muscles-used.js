import React from "react";

const MusclesUsed = ({ muscles = [] }) => {
    return (
        <ul className="space-y-4 list-disc list-inside mt-4 mb-4">
            {muscles.map((muscle, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-indigo-600">{muscle[0]}:</span>
                    <span className="mt-1 sm:mt-0 sm:ml-2 text-gray-700">{muscle[1]}</span>
                </li>
            ))}
        </ul>
    );
}

export default MusclesUsed;