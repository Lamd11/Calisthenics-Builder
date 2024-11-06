import React, { useState } from "react";
import VideoCarouselDescription from "./videoCarousalDescription";

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
            <h1 className={`mx-auto mt-8 mb-8 text-4xl md:text-5xl lg:text-6xl text-${color}-500 font-semibold`}>
                Videos
            </h1>

            {/* Video Carousel */}
            <div className="relative flex w-full items-center justify-center space-x-4 md:space-x-8 lg:space-x-12">
                {/* Previous Video */}
                <div className="absolute left-0 scale-75 transform opacity-80 transition-all duration-300">
                    <iframe
                        src={videos[(currentSlide - 1 + videos.length) % videos.length].url}
                        title="Previous Video"
                        className="h-[30vh] w-[80vw] shadow-md md:h-[35vh] md:w-[45vw] lg:h-[40vh] lg:w-[40vw]"
                        allowFullScreen
                    />
                </div>

                {/* Current Video */}
                <iframe
                    src={videos[currentSlide].url}
                    title="Current Video"
                    className="z-10 h-[35vh] w-[80vw] scale-105 transform shadow-2xl transition-all duration-300 md:h-[45vh] md:w-[50vw] lg:h-[50vh] lg:w-[50vw]"
                    allowFullScreen
                />

                {/* Next Video */}
                <div className="absolute right-0 scale-75 transform opacity-80 transition-all duration-300">
                    <iframe
                        src={videos[(currentSlide + 1) % videos.length].url}
                        title="Next Video"
                        className="h-[30vh] w-[80vw] shadow-md md:h-[35vh] md:w-[45vw] lg:h-[40vh] lg:w-[40vw]"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-4">
                <button
                    className={`mr-4 rounded-md bg-${color}-500 px-3 py-1 md:px-4 md:py-2 text-white`}
                    onClick={prevSlide}
                >
                    Previous
                </button>
                <button
                    className={`rounded-md bg-${color}-500 px-3 py-1 md:px-4 md:py-2 text-white`}
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>

            {/* Video Description */}
            <div className="mt-6 w-full px-4 md:w-3/4 lg:w-2/3">
                <div className="text-center">
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Video Summary</h2>
                    <h3 className="mt-4 text-xl font-semibold md:mt-6 md:text-2xl lg:text-3xl">{videos[currentSlide].title}</h3>
                    <p className="mt-2 text-base text-gray-600 md:mt-3 md:text-lg">{videos[currentSlide].description}</p>
                </div>
                <VideoCarouselDescription videoDescription={videos[currentSlide].video_summary} />
            </div>
        </div>
    );
};

export default VideoCarousal;
