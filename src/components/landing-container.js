import React from 'react'
import {Link} from 'react-router-dom'

const LandingContainer = ({ image, name, text, link, isHero}) =>{

    return(
        <div className='relative text-center m-0 p-0'>
            <img 
                src={image}
                alt={name}
                className={`w-full h-[110vh] object-cover ${isHero ? '' : 'object-[40vw_50%]'}`}
            />
            {isHero ? (
                <>
                    <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0 ,0 ,0 ,4 )]'></div>
                    <div className='absolute top-30 left-50 translate-x-1/2 text-white bg[rgba(61, 155, 255, 0.4)] w-full'>
                        <div className='text-2xl'>
                            <h1>{name}</h1>
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className='absolute top-0 left-0 w-[40vw] h-[110vh] bg-white flex flex-col justify-center items-center text-2xl'>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <Link to={link}>
                        <button className='text-xl border-none bg-[3d9bff] text-white p-4 hover:bg-[#007bff]'>
                            View
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );

}

export default LandingContainer 

