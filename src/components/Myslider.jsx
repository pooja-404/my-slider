import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Myslider = () => {
    return (
        <div className='max-w-[900px] px-3 mx-auto pt-24 pb-7 '>
            <Swiper effect={'flip'} grabCursor={true} pagination={false} navigation={true} modules={[EffectFlip, Pagination, Navigation]} className="mySwiper ">
                <SwiperSlide className='text-center '>
                    <img className='w-full' src="https://i.ibb.co/Ch9rZCp/img3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full' src=" https://i.ibb.co/1TqFxyW/img1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full' src="https://i.ibb.co/9hrRP0C/img2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full' src="https://i.ibb.co/Ch9rZCp/img3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full' src="https://i.ibb.co/tJJt3mT/img4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full' src="https://i.ibb.co/tJJt3mT/img4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Myslider

