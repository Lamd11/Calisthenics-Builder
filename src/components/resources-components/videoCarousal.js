import React, { useState } from "react";

const VideoCarousal = ({ videos, color }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + videos.length) % videos.length);
    };

    return (
        <div className="mx-auto flex flex-col items-center">
            {/* Title */}
            <h1 className={`mx-auto mt-8 mb-8 text-6xl text-${color}-500 font-semibold`}>
                Videos
            </h1>

            {/* Video Carousel */}
            <div className="relative flex w-full items-center justify-center space-x-12">
                {/* Previous Video */}
                <div className="absolute left-0 scale-75 transform opacity-80 transition-all duration-300">
                    <iframe
                        src={videos[(currentSlide - 1 + videos.length) % videos.length].url}
                        title="Previous Video"
                        className="h-[40vh] w-[40vw] shadow-md"
                        allowFullScreen
                    />
                </div>

                {/* Current Video */}
                <iframe
                    src={videos[currentSlide].url}
                    title="Current Video"
                    className="z-10 h-[50vh] w-[50vw] scale-105 transform shadow-2xl transition-all duration-300"
                    allowFullScreen
                />

                {/* Next Video */}
                <div className="absolute right-0 scale-75 transform opacity-80 transition-all duration-300">
                    <iframe
                        src={videos[(currentSlide + 1) % videos.length].url}
                        title="Next Video"
                        className="h-[40vh] w-[40vw] shadow-md"
                        allowFullScreen
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
};

export default VideoCarousal;
