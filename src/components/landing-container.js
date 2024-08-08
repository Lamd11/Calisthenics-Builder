import React from 'react'
import {Link} from 'react-router-dom'

const LandingContainer = ({ image, title, text, link, isHero, isIdentImage}) =>{

    return(
        <div className='relative text-center m-0 p-0 w-full'>
            <img 
                src={image}
                alt={title}
                className={`w-full h-[110vh] object-cover ${!isIdentImage ? '' : 'object-[40vw_50%]'}`}
            />
            {isHero ? (
                <>
                    <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]'></div>
                    <div className='absolute top-[15%] left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white bg-[rgba(61,155,255,0.4)] w-full h-[25%] flex items-center justify-center'>
                        <div className='justify-center align-middle'>
                            <h1 className='text-6xl font-bold mb-4'>{title}</h1>
                            <p className='text-3xl'>{text}</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className='absolute top-0 left-0 w-[40vw] h-[110vh] bg-[white] flex flex-col justify-center items-center text-2xl'>
                    <h1 className='text-6xl font-bold mb-4'>{title}</h1>
                    <p className='text-2xl mb-16'>{text}</p>
                    <Link to={link}>
                        <button className='text-xl border-none bg-[#3d9bff] text-white p-4 hover:bg-[#007bff]'>
                            View More
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );

}

export default LandingContainer 

