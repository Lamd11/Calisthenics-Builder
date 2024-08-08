import React from 'react'

const skillCard = (name, image, onClick) => {
    return(
        <div className='bg-[#081320] text-white p-0 m-[20px] w-[350px] h-[280px] cursor-pointer' onClick={onClick}>
          <h2 className='h-7 text-center'>${name}</h2>
          <img src={image} alt={name} className='object-cover w-[350px] h-[210px]'/>
       </div>
    );
}

export default skillCard;