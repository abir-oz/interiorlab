import React from 'react';
import { whatWeDo } from '../../data/postData';

const WhatWeDo = () => {
    return (
        <>
            <div className="w-full my-10">
                <div className="flex flex-wrap justify-center items-center lg:mx-20 md:mx-10">
                    {
                        whatWeDo.map((item, index) => (
                            <div key={index} className='md:w-1/3 w-full'>
                                <div className="flex flex-nowrap items-center m-4 lg:m-5 md:m-2">
                                    <span className='bg-orange-400 text-2xl p-5 rounded-full mr-3 lg:mr-5 md:mr-2 text-white font-bold leading-tight'>{item.icon}</span>
                                    <div>
                                        <h3 className='font-display text-base'>{item.title}</h3>
                                        <p className=' tracking-wide text-sm font-base text-gray-500 mt-3'>{item.details}</p>
                                    </div>
                                </div></div>

                        ))
                    }
                </div>
            </div>

            <div className='my-16 mx-auto text-center text-lg font-bold'>
                <a className='uppercase px-8 py-4 text-white bg-orange-400' href="/contact-us">Get in touch with us</a>
            </div>
        </>
    );
};

export default WhatWeDo;