import React from 'react';
import Service from './Service';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Services = () => {
  return (
    <section className="  ">
      <div className="flex justify-center items-center relative mt-5">
        <div className="divider after:bg-red-500 before:bg-red-500 w-60 text-2xl">
          Shop
        </div>
        <div className="divider after:bg-red-500 before:bg-red-500 w-32 text-xl absolute  top-4"></div>
      </div>
      <div className="flex justify-center   ">
        <div>
          {' '}
          <h2 className="text-4xl font-bold   text-center">
            New Arrival Products
          </h2>
          <p className="text-gary-500  text-lg   mt-3    text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
      {/*
            
   */}

      <div className="px-4">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[1, 2, 3, 4, 7, 6, 8, 5, 7, 6].map((x) => (
            <SwiperSlide key={x}>
              <Service key={x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
