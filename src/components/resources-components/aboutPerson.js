import React from "react";

const AboutPerson = ({ slide }) => {

    /* TailWindCSS does not support dynamic class names. So manually do it. Doesn't work with the div overlay */
    const colorMap = {
        blue: "bg-blue-100",
        orange: "bg-orange-100",
        // Add more colors as needed
    };

    return (
        
        <div className="relative h-screen w-screen">
            {/* Background with color */}
            <div className={`w-full h-full ${colorMap[slide.color]} opacity-50`}></div>

            {/* Title and Image Section */}
            <div className="absolute left-16 top-12 flex flex-col space-y-6">
                <h1 className={`text-6xl text-${slide.color}-500 font-extrabold`}>About {slide.title}</h1>
                <h3 className="text-4xl font-semibold text-black">{slide.occupation_about}</h3>
                <img
                    src={slide.image_about}
                    alt={`${slide.title} about`}
                    className="w-1/3 rounded-lg object-cover"
                />
            </div>

            {/* Descriptions Section */}
            <div className="absolute right-12 top-12 w-[45%] p-8">
                {/* Highlighted Description */}
                <div
                    className="mb-6 text-2xl font-medium leading-relaxed text-gray-800"
                    dangerouslySetInnerHTML={{ __html: slide.highlighted_about_description }}
                />

                {/* Detailed Description */}
                <p className="text-xl font-light leading-relaxed text-gray-700">
                    {slide.about_description}
                </p>
            </div>
        </div>
    );
};

export default AboutPerson;
