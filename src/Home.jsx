import React from 'react'
import hero_img from "../public/img/hero-1.png"
import Product from './components/Product'
import Server from "./components/Server"

const Home = () => {
  return (
    <>
      <section className="main_cont container">
        <div className="w-full flex justify-center">
          <div className="h-screen  w-full flex flex-col justify-center md:w-8/12">
            <h1 className="text-[45px] font-bold md:text-[60px]">
              <span className='text-blue-500'>Build</span> Conversational AI
            </h1>
            <p className="text-[18px]">
              Lime is the universal mobile companion to your desktop CRM. <br />
              Capture more leads, follow up unfairly, and sync it all to
            </p>
            <div className="mt-20">
              <h3 className="text-[18px]">Get Started</h3>
              <div className="relative w-[55%] mt-10">
                <input
                  type="number"
                  placeholder="Enter your number"
                  className="relative w-full"
                />
                <button type="submit">
                  <i className="fa-solid fa-chevron-right bg-blue-400 p-18 rounded-full block text-white absolute right-2 top-1/2 -translate-y-1/2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="h-screen w-4/12 !md:flex md:justify-center md:items-end hidden md:block md:!mt-6">
            <img src={hero_img} className="h-[85%]" />
          </div>
        </div>
      </section>
      <Product />
      <Server />
    </>
  );
}

export default Home