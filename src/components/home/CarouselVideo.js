// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
import ReactPlayer from 'react-player';
// Import Swiper styles
import 'swiper/css';
import { videos } from '../../data/postData';

const CarouselVideo = () => {
    return (
        <div className="w-full">
            <div className='m-10 text-center relative'>
                <Swiper
                    modules={[Navigation, Pagination, Lazy, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    lazy={true}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }
                    }
                >
                    {
                        videos.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ReactPlayer width={"100%"} height={"260px"} controls={true} url={item.url} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div >
    );
};

export default CarouselVideo;