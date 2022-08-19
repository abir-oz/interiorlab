import React from 'react';
import { testimonial } from '../../../data/postData';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {

    return (
        <div className="lg:my-24 my-10">
            <div className='xl:mx-36 lg:mx-28 md:mx-16 mx-5'>
                <div className="w-full flex flex-wrap items-center justify-center">
                    {
                        testimonial.map((item, index) => (
                            <SingleTestimonial key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;