import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SingleTestimonial = ({ item }) => {
    const [readMore, setReadMore] = useState(false);

    const getParagraph = (paragraph) => {
        let firstParagraph = paragraph.substring(0, 220);
        let secondParagraph = paragraph.substring(220);
        return [firstParagraph, secondParagraph];
    }

    const handleReadMore = (e) => {
        e.preventDefault();
        setReadMore((prevState) => !prevState);
    }

    return (
        <div className="w-full lg:w-1/3 md:w-1/2 mt-8 lg:mt-0">
            <div className="text-gray-700 mx-6 relative">
                <div className=' bg-gray-200 p-5 rounded-xl triangle'>
                    <h3 className='font-bold text-base mb-3'>
                        {item.heading}
                    </h3>
                    <p className='text-sm'>
                        {getParagraph(item.content)[0]}
                        {!readMore && <span>...</span>}
                        {readMore && <span>{getParagraph(item.content)[1]}</span>}
                        <span onClick={handleReadMore} className='block my-2 text-center'>{!readMore ? "+ Read More" : "- Read Less"}</span>
                    </p>
                </div>

            </div>
            <div className='mt-5 flex flex-col justify-center items-center'>
                <img className='w-36 h-36 rounded-full' src={item.thumb} alt="" />
                <p className='text-sm font-bold mt-3'>{item.name}</p>
            </div>
            <div className='mt-2 flex justify-center items-center'>
                {
                    Array(item.review).fill(1).map((item, index) => (
                        <FaStar key={index} className='text-ss-red-500 m-0.5' />
                    ))
                }
            </div>
        </div >
    );
};

export default SingleTestimonial;