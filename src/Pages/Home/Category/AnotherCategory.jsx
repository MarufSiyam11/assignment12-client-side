import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../../assets/img/business.png"
import img2 from "../../../assets/img/citynews.jfif"
import img3 from "../../../assets/img/education.png"
import img4 from "../../../assets/img/entertainment.png"
import img5 from "../../../assets/img/sports.png"
import img6 from "../../../assets/img/websseris.jfif"

const Category = () => {
    return (
        <section className='m-10'>
           <h1 className='text-center text-4xl font-bold p-5 '>Hot News</h1>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img className='w-96 h-80' src={img1} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>Business</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='w-96 h-80' src={img2} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>City News</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='w-96 h-80' src={img3} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>Education</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='w-96 h-80' src={img4} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>Entertainment</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='w-96 h-80' src={img5} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>Sports</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='w-96 h-80' src={img6} alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-16'>Web Seris</h3>
            </SwiperSlide>
      </Swiper>
     
        </section>
    );
};

export default Category;