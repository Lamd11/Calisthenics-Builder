import React from "react";
import SocialMedia from "./socialMedia";

const AboutPerson = ({ slide }) => {

    const colorMap = {
        blue: "bg-blue-100",
        orange: "bg-orange-100",
        // Add more colors as needed
    };

    return (
        <div className="relative h-auto w-full p-4 lg:h-screen lg:p-0">
            {/* Background with color */}
            <div className={`absolute inset-0 ${colorMap[slide.color]} opacity-50`}></div>

            {/* Main Content Wrapper */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:space-x-8">

                {/* Title and Image Section */}
                <div className="flex flex-col space-y-4 p-4 lg:w-1/2 lg:space-y-6 lg:pl-16 lg:pt-12">
                    <h1 className={`text-3xl font-extrabold text-${slide.color}-500 lg:text-6xl`}>
                        About {slide.title}
                    </h1>
                    <h3 className="text-xl font-semibold text-black lg:text-4xl">
                        {slide.occupation_about}
                    </h3>
                    <img
                        src={slide.image_about}
                        alt={`${slide.title} about`}
                        className="w-2/4 rounded-lg object-cover lg:w-2/3"
                    />
                </div>

                {/* Descriptions Section */}
                <div className="flex flex-col space-y-4 p-4 lg:w-1/2 lg:pr-12 lg:pt-12">
                    {/* Highlighted Description */}
                    <div
                        className="mb-4 text-lg font-medium leading-relaxed text-gray-800 lg:mb-6 lg:text-2xl"
                        dangerouslySetInnerHTML={{ __html: slide.highlighted_about_description }}
                    />

                    {/* Detailed Description */}
                    <p className="text-base font-light leading-relaxed text-gray-700 lg:text-xl">
                        {slide.about_description}
                    </p>

                    {/* Social Media Links */}
                    <div className="mt-8">
                        <SocialMedia links={slide.links} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPerson;
