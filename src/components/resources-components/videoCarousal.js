import React, { useState } from "react";

const VideoCarousal = ({ videos }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + videos.length) % videos.length);
    };

    return (
        <div className="mx-auto flex flex-col items-center">
            <div className="relative flex w-full justify-center">
                {/* Previous Video */}
                <div absolute left-10 opacity-50 scale-90>
                    <iframe
                        src={videos[(currentSlide - 1 + videos.length) % videos.length].url}
                        title="Previous Video"
                        className="h-36 w-64"
                    />
                </div>

                <iframe
                    src={videos[currentSlide].url}
                    title="Current Video"
                    className="z-10 h-48 w-80 scale-105 transform shadow-lg"
                />

                {/* Next Video*/}
                <div absolute right-10 opacity-50 scale-90>
                    <iframe
                        src={videos[(currentSlide + 1) % videos.length].url}
                        title="Previous Video"
                        className="h-36 w-64"
                    />
                </div>
            </div>
            {/* Navigation Buttons */}
            <div className="mt-4">
                <button
                    className="mr-4 rounded-md bg-blue-500 px-4 py-2 text-white"
                    onClick={prevSlide}
                >
                    Previous
                </button>
                <button
                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>

            {/* Video Description */}
            <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold">{videos[currentSlide].title}</h2>
                <p className="text-gray-600">{videos[currentSlide].description}</p>
            </div>
        </div>
    );

}

export default VideoCarousal;
