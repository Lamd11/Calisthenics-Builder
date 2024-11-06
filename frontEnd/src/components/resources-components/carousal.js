import React, { useState } from 'react';
import VideoCarousal from './videoCarousal';
import AboutPerson from './aboutPerson';

const Carousal = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slides.length - 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
    };

    return (
        <div className="w-full">
            <div className="relative mx-auto mb-16 h-[70vh] w-full overflow-hidden md:h-[80vh] lg:h-[90vh] lg:w-11/12">
                {/* Slide Wrapper */}
                <div
                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}>

                    {/* Loop through slides */}
                    {slides.map((slide, index) => (
                        <div key={index} className="relative flex h-full w-full flex-shrink-0 flex-col lg:flex-row">
                            {/* Slide Content (Title, Description) */}
                            <div className="w-full bg-white px-4 py-8 text-black md:py-12 lg:absolute lg:left-0 lg:top-0 lg:ml-10 lg:mt-[15%] lg:w-5/12 lg:p-8">
                                <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold text-${slide.color}-500`}>{slide.title}</h1>
                                <h2 className={`text-xl md:text-2xl lg:text-2xl font-semibold text-${slide.color}-700 mt-4`}>{slide.occupation}</h2>
                                <p className="mt-4 text-sm md:text-lg lg:text-xl">{slide.description}</p>
                            </div>
                            {/* Slide Image */}
                            <img
                                className="h-1/2 w-full object-cover lg:absolute lg:left-[41.666667%] lg:h-full lg:w-7/12"
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className={`absolute left-2 top-1/2 -translate-y-1/2 transform rounded-lg bg-gray-900 bg-opacity-50 p-2 md:p-4 text-white duration-150 hover:bg-black hover:bg-opacity-80 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                >
                    &#8592;
                </button>

                <button
                    className={`absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg bg-gray-900 bg-opacity-50 p-2 md:p-4 text-white duration-150 hover:bg-black hover:bg-opacity-80 ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                >
                    &#8594;
                </button>

                {/* Dot Slide Indicator */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2 md:bottom-8">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentSlide ? `bg-${slide.color}-500` : 'bg-gray-600 opacity-50'} transition-opacity duration-300`}
                        />
                    ))}
                </div>
            </div>

            {/* About Person Section */}
            <div className="px-4 lg:px-0">
                <AboutPerson slide={slides[currentSlide]} />
            </div>

            {/* Conditionally render VideoCarousal if current slide has videos */}
            {slides[currentSlide].videos && slides[currentSlide].videos.length > 0 && (
                <div className="mx-auto mt-8 lg:mt-16">
                    <VideoCarousal
                        videos={slides[currentSlide].videos}
                        color={slides[currentSlide].color}
                    />
                </div>
            )}
        </div>
    );
};

export default Carousal;
