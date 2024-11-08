import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const quotes = [
    "Indeed, Allah is with the patient. - Quran 2:153",
    "And whoever fears Allah - He will make for him a way out. - Quran 65:2",
    "The best among you are those who have the best manners and character. - Prophet Muhammad (PBUH)",
    "Do not lose hope, nor be sad. - Quran 3:139",
    "So verily, with the hardship, there is relief. - Quran 94:6"
];

const Panel = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="my-8">
                <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Gym Website Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {quotes.map((quote, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaQuoteLeft className="text-gray-400 text-2xl mb-4 mx-auto" />
                            <p className="text-lg italic">{quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Panel;
