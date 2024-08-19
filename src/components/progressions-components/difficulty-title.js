import React from "react";

const DifficultyTitle = (difficulty) =>{

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

    return(
        <div className="bg-white shadow-lg p-4">
            <h3 className="text-gray-800 text-2xl text-left">
                Difficulty: {difficultyString(difficulty)}
            </h3>
        </div>

    );
}

export default DifficultyTitle;