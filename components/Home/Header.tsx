import React from 'react';

const Header = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full  h-[800px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 justify-center items-center px-4   "
      >
        <div>
          <h1 className="text-4xl xl:text-7xl  font-bold text-white">
            Highly Modified Car Repair system And Maintenance.
          </h1>
          <p className="py-5 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            fuga repellendus ipsam, recusandae eius tenetur. Eius ea laborum
            sint quasi nemo, natus doloremque dolores exercitationem numquam
            vitae suscipit cum iure!
          </p>
          <div>
            <button className="bg-red-500 w-40 h-12 text-white ">
              Explor More
            </button>

            <button className=" ml-4 border-2  border-white w-40 h-12 text-white">
              Contact Us
            </button>
          </div>
        </div>
        <div className="  absolute right-24 bottom-0  hidden lg:flex md:flex">
          <div>
            <img src="/image/causell.png" className="w-full  h-[700px]      " />
          </div>
        </div>
        <div className="  absolute    right-10  top-5   ">
          <a
            href="#slide2"
            className=" btn bg-red-600  w-20 h-14  text-white text-3xl border-none mr-3    "
          >
            ❮
          </a>

          <a
            href="#slide1"
            className="w-20 h-14   btn bg-white text-black text-3xl  border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
