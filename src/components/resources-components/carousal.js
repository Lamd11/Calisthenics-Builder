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
        <div className='relative w-11/12 h-[90vh] overflow-hidden mx-auto'>
            {/*/ Slide Wrapper */}
            <div
                className='absolute inset-0 flex transition-transform duration-700 ease-in-out'
                style={{
                    transform: direction === 'right'
                        ? `translateX(-${currentSlide * 100}%)`
                        : `translateX(${currentSlide * 100}%)`
                }}>

                
                {/* Loop through slides */}
                {slides.map((slide, index) => (
                    <div key={index} className='w-full h-full relative flex-shrink-0'>
                        {/* Slide Content (Title, Description) */}
                        <div className='absolute top-0 left-0 w-5/12 text-black bg-white'>
                            <div className='ml-28 mt-[40%]'>
                                <h1 className={`text-7xl font-bold text-${slide.color}-500`}>{slide.title}</h1>
                                <h2 className={`text-2xl font-semibold text-${slide.color}-700 mt-4`}>{slide.occupation}</h2>
                                <p className='selection:text-lg mt-12'>{slide.description}</p>
                            </div>
                        </div>
                        {/* Slide Image */}
                        <img
                            className='absolute left-[41.666667%] w-7/12 h-full object-cover'
                            src={slide.image}
                            alt={slide.title}
                        />
                        {/* Dark Overlay */}
                    </div>
                ))}

            </div>

            <button
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 hover:bg-black duration-150 p-8 rounded-lg text-white p-4'
                onClick={prevSlide}>
                &#8592;
            </button>
            <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 hover:bg-black duration-150 p-8 rounded-lg text-white p-4'
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
