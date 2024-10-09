import React, { useEffect } from 'react';

const Carousal = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

    }, [currentSlide])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length())
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length())
    }

    return (
        <div>
            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                />
            <div className='p-4'>
                <h1>
                    {slides[currentSlide].title}
                </h1>
                <p>
                    {slides[currentSlide].description}
                </p>
            </div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>

        </div>
    )
}

export default Carousal;
