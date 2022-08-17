import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { testimonial } from '../../data/postData';

const Testimonial = () => {
    const [readMore, setReadMore] = useState(false);

    const getParagraph = (paragraph) => {
        let firstParagraph = paragraph.substring(0, 220);
        let secondParagraph = paragraph.substring(220);
        return [firstParagraph, secondParagraph];
    }

    const handleReadMore = (e) => {
        e.preventDefault();
        setReadMore(!readMore);
        readMore ? e.target.innerHTML = "+ Read More" : e.target.innerHTML = "- Read Less";
        const seeMoreContainer = e.target.previousElementSibling;
        const dotElement = e.target.previousElementSibling.previousElementSibling;
        seeMoreContainer.classList.toggle('hidden');
        dotElement.classList.toggle('hidden')
    }

    return (
        <div className="lg:my-24 my-10">
            <div className='xl:mx-36 lg:mx-28 md:mx-16 mx-5'>
                <div className="w-full flex flex-wrap items-center justify-center">
                    {
                        testimonial.map((item, index) => (
                            <div key={index} className="w-full lg:w-1/3 md:w-1/2 mt-8 lg:mt-0">
                                <div className="text-gray-700 mx-6 relative">
                                    <div className=' bg-gray-200 p-5 rounded-xl triangle'>
                                        <h3 className='font-bold text-base mb-3'>
                                            {item.heading}
                                        </h3>
                                        <p className='text-sm'>
                                            {getParagraph(item.content)[0]}
                                            <span>...</span>
                                            <span className='hidden'>{getParagraph(item.content)[1]}</span>
                                            <span onClick={handleReadMore} className='block my-2 text-center'> + Read More</span>
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
                                            <FaStar key={index} className=' text-yellow-500 m-0.5' />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;