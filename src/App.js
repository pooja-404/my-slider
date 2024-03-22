import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Virtual } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import "swiper/css/virtual";
import image from './assets/images/workmen.png'
import image2 from './assets/images/workingwomen.png'
import image3 from './assets/images/work2men.png'
import Myslider from "./components/Myslider";
export default function App() {
  return (
    <div className="max-w-[1320px] px-3 mx-auto pt-12">
      <Swiper
        modules={[Virtual, Pagination]}
        pagination={true}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={4}
        virtual 
      >
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image3} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image3} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-12'>
            <img className="w-full" src={image3} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <Myslider />
      </div>
    </div >
  );
}