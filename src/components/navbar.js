import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="bg-[#3d9bff] sticky top-0 z-1000 flex items-center justify-between min-h-[80px] w-full">
            <div className="flex items-center gap-4 ml-[3.5%]">
                <Link to="/calisthenics-builder" className="text-white font-bold text-[1.5rem]">
                    Calisthenics Builder
                </Link>
                <Link to="/calisthenics-builder">
                    <img class="header-icon" src="/images/gymnastic-rings.png" className="h-[60px]" alt="Logo"/>
                </Link>
            </div>
            <ul className="flex justify-between m-0 mr-[4rem] list-none w-[50%] ">
                <li className="mx-[10px]">
                    <Link to="/progressions" className="text-white font-bold hover:text-gray-300 text-[1.5rem]">
                        Progressions
                    </Link>
                </li>
                <li className="mx-[10px]">
                    <Link to="/workout-plan" className="text-white font-bold hover:text-gray-300 text-[1.5rem]">
                        Workout Plan
                    </Link>
                </li>
                <li className="mx-[10px]">
                    <Link to="/resources" className="text-white font-bold hover:text-gray-300 text-[1.5rem]">
                        Resources
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;