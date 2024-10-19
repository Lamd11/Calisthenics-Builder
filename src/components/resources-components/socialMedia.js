import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg"

const SocialMedia = ( {links} ) => {

    return (
        <div className="flex justify-center space-x-2">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                    <BsInstagram className="h-10 w-10 transition-colors duration-150 ease-in-out hover:text-[#d62976]" />
                </span>
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                    <BsYoutube className="h-10 w-10 transition-colors duration-150 ease-in-out hover:text-[#c4302b]" />
                </span>
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                    <CgWebsite className="h-10 w-10 transition-colors duration-150 ease-in-out hover:text-[#1cdcea]" />
                </span>
            </a>
        </div>

    );
}

export default SocialMedia;