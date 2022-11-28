import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faSearch,
  faShoppingBag,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
const Layouts = ({ title, children }: any) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' Car Reace' : 'Car Reace'}</title>
      </Head>
      <div className="flex flex-col justify-between  min-h-screen   bg-slate-200   ">
        <header>
          <div className="  bg-white ">
            <div className="navbar  h-20 container m-auto  ">
              <div className="navbar-start">
                <img src="/image/logo-2.png" className=" z-10" alt="" />
              </div>
              <div className="navbar-center hidden lg:flex justify-center">
                <ul className=" flex p-0 ">
                  <li className="mr-4">
                    <a className=" text-xl font-bold hover:text-red-400  cursor-pointer">
                      Home +
                    </a>
                  </li>
                  <li className="mr-4">
                    <a className=" text-xl font-bold  hover:text-red-400  cursor-pointer">
                      Services +
                    </a>
                  </li>
                  <li className="mr-4">
                    <a className=" text-xl font-bold  hover:text-red-400  cursor-pointer">
                      Blogs +
                    </a>
                  </li>
                  <li className="mr-4">
                    <a className=" text-xl font-bold  hover:text-red-400  cursor-pointer">
                      Pages +
                    </a>
                  </li>
                  <li className="mr-4">
                    <a className=" text-xl font-bold  hover:text-red-400  cursor-pointer">
                      Contact us +
                    </a>
                  </li>
                </ul>
              </div>
              <div className="  navbar-end     lg:flex   ">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-xl hover:text-red-500 cursor-pointer"
                />
                <div className="divider  rotate-90  w-12  "></div>
                <div className="  ">
                  <div className="absolute">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-3xl hover:text-red-500 cursor-pointer  text-gray-500"
                    />
                  </div>
                  <div className="bg-red-500 rounded-full   left-8 w-8 items-center justify-center text-center relative ">
                    <h1 className="text-xl text-white">5</h1>
                  </div>
                </div>
              </div>
              <div className="navbar-end hidden lg:flex mr-4">
                {' '}
                <button className="   commonBtn commonBtnCss commonbtn-hover">
                  Get Booking{' '}
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className=" ">{children}</main>
        <footer>
          <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
              <span className="footer-title">Newsletter</span>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none common-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </footer>
      </div>
    </>
  );
};

export default Layouts;
