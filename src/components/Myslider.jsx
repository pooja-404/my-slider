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
                    <img className='w-full h-[520px]' src="https://i.ibb.co/7QGQnjG/slip5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full h-[520px]' src=" https://i.ibb.co/yS98F0j/slop5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full h-[520px]' src="https://i.ibb.co/hK4pPcn/slib.webp" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full h-[520px]' src="https://i.ibb.co/mHZR9NC/slib2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full h-[520px]' src="https://i.ibb.co/5v02jqW/slip3.webp" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='w-full h-[520px]' src="https://i.ibb.co/n1zk46G/slip4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Myslider

