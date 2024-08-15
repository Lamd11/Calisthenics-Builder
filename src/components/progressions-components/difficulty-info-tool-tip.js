import React from "react";

const DifficultyInfoTooltip = ({ text }) => {
    return (
        <div className="relative group">
            <span className="underline cursor-pointer">?</span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-800 text-white text-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {text}
            </div>
        </div>
    );
};

export default DifficultyInfoTooltip;
