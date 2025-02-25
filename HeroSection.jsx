import React from 'react'
import images from "../assets/images/images";

const HeroSection = () => {
  return (
    <>
      <div className="bg-blue-950 px-4 sm:px-12 py-6  md:py-6 xl:py-30 md:px-20 lg:px-14 xl:px-34 flex flex-col-reverse lg:flex-row lg:justify-between ">
        <div className="flex flex-col gap-8 items-start text-start w-full lg:w-1/2 md:pt-10 lg:pt-10 mt-20">
          <h1 className="text-gray-200 text-5xl font-bold  mt-7 ">
            Build Your Landing Page With
            <span className="text-white px-1 relative inline-block">
              Bootslander

              <div className="absolute bottom-0 left-2 -mb-2 w-68 border-2 border-green-300"></div>
            </span>
          </h1>
          <p className="text-white text-2xl">
            We are a team of talented designers making websites with Bootstrap.
          </p>
          <div className='flex gap-4 '>
            <button className="bg-green-300 rounded-full text-white px-8 py-2 text-xs md:text-lg hover:cursor-pointer hover:shadow-lg">
              Get Started
            </button>

            <img src={images.play} alt="" className='w-8 h-8 hover:cursor-pointer' />

            <a href="" className="text-white text-xl font-semibold hover:text-green-300" > watch vedio</a>
          </div>
        </div>

        <img src={images.hero} alt="home" className="lg:w-70 mt-30 xl:mt-10 xl:w-100 image-animation " />
      </div>

     

    </>
  )
}

export default HeroSection;
