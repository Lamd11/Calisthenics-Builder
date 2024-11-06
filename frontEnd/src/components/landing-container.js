import React from 'react';
import { Link } from 'react-router-dom';

const LandingContainer = ({ image, title, text, link, isHero, isIdentImage }) => {
    return (
        <div className="relative m-0 flex w-full flex-col p-0 text-center lg:flex-row">
            {isHero ? (
                <div className="relative w-full">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-[60vh] lg:h-[110vh] object-cover ${!isIdentImage ? '' : 'object-[40vw_50%]'}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full bg-[rgba(61,155,255,0.4)] p-8 text-center text-white">
                            <h1 className="mb-4 text-4xl font-bold lg:text-6xl">{title}</h1>
                            <p className="text-2xl lg:text-3xl">{text}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="hidden h-[60vh] w-full object-cover md:block lg:h-[110vh] lg:w-1/2"
                    />
                    <div className="flex h-[40vh] w-full items-center justify-center bg-white text-center text-black lg:h-full lg:w-1/2">
                        <div className="flex-col items-center justify-center first-letter:flex lg:mt-[50%]">
                            <h1 className="mb-4 text-4xl font-bold lg:text-6xl">{title}</h1>
                            <p className="mb-8 text-xl lg:mb-16 lg:text-2xl">{text}</p>
                            <Link to={link}>
                                <button className="border-none bg-[#3d9bff] px-6 py-3 text-lg text-white hover:bg-[#007bff] lg:text-xl">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default LandingContainer;
