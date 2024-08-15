import React from "react";

const DifficultyLegend = () => {

    return (
        <div className="mt-6 bg-white-500 rounded-lg p-4 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Legend</h3>
            <div className="flex flex-col gap-8">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg mr-3"></div>
                    <div className="text-left">
                        <p className="text-lg font-semibold text-gray-700">Beginner</p>
                        <p className="text-sm text-gray-500">Levels 1-5</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg mr-3"></div>
                    <div className="text-left">
                        <p className="text-lg font-semibold text-gray-700">Intermediate</p>
                        <p className="text-sm text-gray-500">Levels 6-9</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full shadow-lg mr-3"></div>
                    <div className="text-left">
                        <p className="text-lg font-semibold text-gray-700">Advanced</p>
                        <p className="text-sm text-gray-500">Levels 10-13</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg mr-3"></div>
                    <div className="text-left"><p className="text-lg font-semibold text-gray-700">Elite</p>
                        <p className="text-sm text-gray-500">Levels 13+</p></div>
                </div>
            </div>
        </div>
    );
}

export default DifficultyLegend