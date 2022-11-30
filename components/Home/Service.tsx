import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faChartBar,
  faHeart,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Service = () => {
  return (
    <div className="      bg-white p-2 cartItems relative m-2 ">
      <div id="slide1" className="carousel-item     h-48  ">
        <img src="https://placeimg.com/800/200/arch" className=" h-48     " />
      </div>
      <div className="itemIcon z-10 absolute right-4 top-4 flex-col">
        <div className="  flex-row">
          <FontAwesomeIcon
            icon={faHeart}
            className="   cursor-pointer  hover:bg-red-500    text-white   bg-black w-4 h-4 p-2  rounded-full"
          />
        </div>
        <div className="  flex-row">
          <FontAwesomeIcon
            icon={faChartBar}
            className="   cursor-pointer  hover:bg-red-500       text-white   bg-black w-4 h-4 p-2  rounded-full"
          />
        </div>
        <div className="  flex-row">
          <FontAwesomeIcon
            icon={faEye}
            className="   cursor-pointer   hover:bg-red-500    text-white   bg-black w-4 h-4 p-2  rounded-full"
          />
        </div>
        <div className="  flex-row">
          <FontAwesomeIcon
            icon={faSearch}
            className="   cursor-pointer hover:bg-red-500   text-white   bg-black w-4 h-4 p-2  rounded-full"
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl  font-semibold text-center mt-2">
          GT-R Car Brake
        </h1>
        <div className="rating flex justify-center mt-5">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-red-500"
          />
        </div>
        <h2 className="text-center text-3xl mt-3">$804</h2>
        <div className="flex    justify-center ">
          <button className=" btn commonBtn commonBtnCss commonbtn-hover    ">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="   cursor-pointer ml-5"
            />{' '}
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
