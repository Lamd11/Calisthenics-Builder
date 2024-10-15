import React, { useState, useEffect } from 'react';

const Carousal = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(null);

    useEffect(() => {

    }, [currentSlide])

    const nextSlide = () => {
        setDirection('right');
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    const prevSlide = () => {
        setDirection('left');
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            {/*/ Slide Wrapper */}
            <div
                className='absolute inset-4 flex transition-transform duration-700 ease-in-out'
                style={{
                    transform: direction === 'right'
                        ? `translateX(-${currentSlide * 100}%)`
                        : `translateX(${currentSlide * 100}%)`
                }}>

                {/*/ Slide Image */}
                <div className='min-w-full h-full relative'>
                    <img
                        className='w-full h-full object-cover'
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                </div>

                {/*/ Slide COntent (Title, Description) */}
                <div className='absolute top-0 left-0 w-full text-white p-16 pt-8'>
                    <h1 className='text-4xl font-bold'>
                        {slides[currentSlide].title}
                    </h1>
                    <p className='text-lg mt-4'>
                        {slides[currentSlide].description}
                    </p>
                </div>

            </div>

            <button
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 hover:bg-black duration-150 h-full text-white p-4'
                onClick={prevSlide}>
                &#8592;
            </button>
            <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 hover:bg-black duration-150 h-full text-white p-4'
                onClick={nextSlide}>
                &#8594;
            </button>

            {/* Dot Slide Indicator */}
            <div className='absolute top-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400 opacity-50'} transition-opacity duration-300`}
                    >
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Carousal;
