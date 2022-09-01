import React, { useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';

const ParallaxHeader = ({ subheader, children }) => {


    const parallax = useParallax({
        speed: -5,
    });

    useEffect(() => {
        const scrollHandler = () => {
            const pageHeader = document.querySelector('.page_header');
            const pageHeaderHeight = pageHeader.scrollHeight;
            const scrolled = window.pageYOffset;
            if (pageHeaderHeight > 0) {
                pageHeader.style.maxHeight = pageHeaderHeight - scrolled + 'px';
                pageHeader.style.opacity = 1 - scrolled / pageHeaderHeight;
            } else {
                pageHeader.style.maxHeight = pageHeaderHeight + 'px';
            }
        }
        window.addEventListener('scroll', scrollHandler);
    }, []);
    return (
        <div ref={parallax.ref}>
            <div className={`w-full max-h-96 overflow-hidden transition duration-1000 page_header`}>
                <div className="flex flex-col justify-center items-center md:my-32 my-16">
                    <div className='text-center'>
                        <h1 className='capitalize lg:text-4xl md:text-3xl text-2xl tracking-wider font-display font-normal leading-tight text-gray-900 mb-8 mx-12'>{children}</h1>
                        <div className='h_border w-auto bg-gray-900 h-[1.2px]'>
                        </div>
                    </div>
                    {
                        subheader && <h4 className='text-xl leading-none font-light tracking-wider text-slate-500 mt-6'>{subheader}</h4>
                    }
                </div>
            </div>
        </div>
    );
};

export default ParallaxHeader;