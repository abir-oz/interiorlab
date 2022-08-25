import React from 'react';
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { mediaFeature } from '../../data/postData';
import CommonHeader from '../CommonHeader';

const OurAccreditation = () => {
    return (
        <div className="w-full mb-20">
            <div className='xl:mx-40 md:mx-10 mx-2 text-center relative'>
                <CommonHeader>Our Accreditation</CommonHeader>
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