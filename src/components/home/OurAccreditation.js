import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { mediaFeature } from '../../data/postData';

const OurAccreditation = () => {
    return (
        <div className="w-full mb-20">
            <div className='xl:mx-40 md:mx-10 mx-2 text-center relative'>
                <h3 className='uppercase m-0 font-bold font-display text-lg tracking-wide'>Our Accreditation</h3>
                <Swiper
                    modules={[Navigation, Pagination, Lazy, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={5}
                    autoplay
                    lazy={true}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            }
                        }
                    }
                >
                    {
                        mediaFeature.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.thumb} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default OurAccreditation;