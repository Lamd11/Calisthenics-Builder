import React from 'react';

const VideoCarouselDescription = ({ videoDescription }) => {
    return (
        <div className="text-gray mx-auto mb-8 w-[3/4] rounded-lg bg-gray-100 p-6 shadow-lg">
            {videoDescription ? (
                videoDescription.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">{section[0]}</h3>
                        <div>
                            {section[1].map((item, idx) => (
                                <div key={idx} className="mb-2">
                                    {idx % 2 === 0 ? (
                                        <p className="text-gray font-semibold">{item}</p>
                                    ) : (
                                        <p className="text-sm text-gray-600">{item}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">No summary available for this video.</p>
            )}
        </div>

    );
};

export default VideoCarouselDescription;
