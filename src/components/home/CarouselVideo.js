// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
import ReactPlayer from 'react-player';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const CarouselVideo = () => {
    return (
        <div className="m-10 text-center  relative">
            <Swiper
                modules={[Navigation, Pagination, Lazy, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                draggable={true}
                autoplay
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
                <SwiperSlide>
                    <ReactPlayer width={"100%"} controls={true} url='https://www.youtube.com/watch?v=tfd8dBi5QZQ' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactPlayer width={"100%"} controls={true} url='https://www.youtube.com/watch?v=tfd8dBi5QZQ' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactPlayer width={"100%"} controls={true} url='https://www.youtube.com/watch?v=tfd8dBi5QZQ' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactPlayer width={"100%"} controls="true" url='https://www.youtube.com/watch?v=tfd8dBi5QZQ' />
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default CarouselVideo;