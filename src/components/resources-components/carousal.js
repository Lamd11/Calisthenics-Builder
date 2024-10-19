import React, { useState } from 'react';
import VideoCarousal from './videoCarousal';
import AboutPerson from './aboutPerson';

const Carousal = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(null);

    const nextSlide = () => {
        setDirection('right');
        // Only go to the next slide if we're not at the last slide
        setCurrentSlide((prevSlide) => {
            if (prevSlide < slides.length - 1) {
                return prevSlide + 1;
            } else {
                return prevSlide; // Stay on the last slide
            }
        });
    };

    const prevSlide = () => {
        setDirection('left');
        // Only go to the previous slide if we're not at the first slide
        setCurrentSlide((prevSlide) => {
            if (prevSlide > 0) {
                return prevSlide - 1;
            } else {
                return prevSlide; // Stay on the first slide
            }
        });
    };

    return (
        <div>
            <div className='relative mx-auto mb-16 h-[90vh] w-11/12 overflow-hidden'>
                {/* Slide Wrapper */}
                <div
                    className='absolute inset-0 flex transition-transform duration-700 ease-in-out'
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}>
                    
                    {/* Loop through slides */}
                    {slides.map((slide, index) => (
                        <div key={index} className='relative h-full w-full flex-shrink-0'>
                            {/* Slide Content (Title, Description) */}
                            <div className='absolute left-0 top-0 w-5/12 bg-white text-black'>
                                <div className='ml-28 mt-[40%]'>
                                    <h1 className={`text-7xl font-bold text-${slide.color}-500`}>{slide.title}</h1>
                                    <h2 className={`text-2xl font-semibold text-${slide.color}-700 mt-4`}>{slide.occupation}</h2>
                                    <p className='mt-12 selection:text-lg'>{slide.description}</p>
                                </div>
                            </div>
                            {/* Slide Image */}
                            <img
                                className='absolute left-[41.666667%] h-full w-7/12 object-cover'
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className={`absolute left-0 top-1/2 -translate-y-1/2 transform rounded-lg bg-gray-900 bg-opacity-50 p-4 p-8 text-white duration-150 hover:bg-black hover:bg-opacity-80 ${
                        currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                >
                    &#8592;
                </button>

                <button
                    className={`absolute right-0 top-1/2 -translate-y-1/2 transform rounded-lg bg-gray-900 bg-opacity-50 p-4 p-8 text-white duration-150 hover:bg-black hover:bg-opacity-80 ${
                        currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                >
                    &#8594;
                </button>

                {/* Dot Slide Indicator */}
                <div className='absolute bottom-9 left-[20%] flex -translate-x-1/2 transform space-x-2'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full 
                        ${index === currentSlide
                                ? `bg-${slide.color}-500`
                                : 'bg-gray-600 opacity-50'
                            } transition-opacity duration-300`}
                        >
                        </div>
                    ))}
                </div>
            </div>

            <AboutPerson slide={slides[currentSlide]} />

            {/* Conditionally render VideoCarousal if current slide has videos */}
            {slides[currentSlide].videos && slides[currentSlide].videos.length > 0 && (
                <div className='mx-auto mt-16'>
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
