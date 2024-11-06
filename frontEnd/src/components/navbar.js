import { useState } from "react";
import { Link } from 'react-router-dom'
const gymnasticRings = process.env.PUBLIC_URL + '/images/gymnastic-rings.png';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    {/* Used complement (!) to switch between true and false*/ }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 flex min-h-[80px] w-full items-center justify-between bg-[#3d9bff]">
            <div className="ml-4 flex items-center gap-4">
                <Link to="/calisthenics-builder" className="text-xl font-bold text-white">
                    Calisthenics Builder
                </Link>
                <Link to="/calisthenics-builder">
                    <img src={gymnasticRings} className="max-h-[60px]" alt="Logo" />
                </Link>
            </div>
            {/* Hamburger Menu for smaller screens*/}
            <button
                onClick={toggleMenu}
                className="block text-white focus:outline-none lg:hidden"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16 M4 12h16 m-7 6h7"></path>
                </svg>
            </button>

            {/* Navigation bar for desktop / larger screens */}
            <ul className="m-0 mr-[4rem] flex hidden w-[50%] list-none justify-between lg:flex">
                <li className="mx-[10px]">
                    <Link to="/progressions" className="text-xl font-bold text-white hover:text-gray-300">
                        Progressions
                    </Link>
                </li>
                <li className="mx-[10px]">
                    <Link to="/news" className="text-xl font-bold text-white hover:text-gray-300">
                        News
                    </Link>
                </li>
                <li className="mx-[10px]">
                    <Link to="/resources" className="text-xl font-bold text-white hover:text-gray-300">
                        Resources
                    </Link>
                </li>
            </ul>

            {/* Dropdown Menu for smaller/mobile screens*/}

            {isOpen && (
                <ul className="absolute right-0 top-[80px] flex w-full flex-col bg-[#3d9bff] lg:hidden">
                    <li className="border-b border-gray-200">
                        <Link
                            to="/progressions"
                            className="block px-4 py-2 font-bold text-white hover:bg-gray-300"
                            onClick={toggleMenu}>
                            Progressions
                        </Link>
                    </li>
                    <li className="border-b border-gray-200">
                        <Link
                            to="/news"
                            className="block px-4 py-2 font-bold text-white hover:bg-gray-300"
                            onClick={toggleMenu}>
                            News
                        </Link>
                    </li>
                    <li className="border-b border-gray-200">
                        <Link 
                            to="/resources" 
                            className="block px-4 py-2 font-bold text-white hover:bg-gray-300"
                            onClick={toggleMenu}>
                            Resources
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;