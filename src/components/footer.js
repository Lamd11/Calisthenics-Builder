import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#f4f4f4] pt-7 pb-7'>
            <div className='ml-[3.5%] mr-[10vw] pr-5'>
                <h3>
                    English
                </h3>
            </div>
            <hr/>
            <div className='ml-[3.5%] flex'>
                <span>
                    Copyright © Calisthenics Builder, Ltd. All rights reserved.
                </span>
                <div className='ml-auto mr-[3.5%] space-x-8'>
                    <Link>
                        Terms of Use
                    </Link>
                    <Link>
                        Privacy Policy 
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer
