import React, { useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';

const PagesHeader = ({ children }) => {


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
            console.log(scrolled, pageHeaderHeight, pageHeaderHeight - scrolled, pageHeader.style.maxHeight);

        }
        window.addEventListener('scroll', scrollHandler);
    }, []);
    return (
        <div ref={parallax.ref}>
            <div className={`w-full max-h-96 overflow-hidden transition duration-1000 page_header`}>
                <div className="px-20 mx-20">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className='md:my-32 my-16 text-center'>
                            <h1 className='capitalize lg:text-5xl md:text-4xl text-2xl tracking-wider font-display font-normal leading-tight mb-5'>{children}</h1>
                            <div className='md:w-64 w-32 border-t-black border-2'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagesHeader;