import React from 'react';
import { services,data } from '../Utils/utils';
import images from '../assets/images/images';

const About = () => {
  return (
    <>

<div className="flex flex-col xl:flex-row px-4  lg:px-20 xl:px-30 py-5 gap-5">
  
  <div className="flex flex-col gap-5 w-full lg:w-220 mt-50">
    <div className='text-lg rounded-md px-5 py-2 w-30 bg-green-50 text-green-300'>About Us</div>
    <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
      Ducimus rerum libero reprehenderit cumque
    </h1>
    <p className="text-gray-600 text-sm lg:text-lg leading-6 sm:leading-7">
      Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
    </p>
    <div className="flex flex-row gap-4">
  <button className="bg-green-300 rounded-md text-white px-5 py-2 text-xs md:text-lg hover:cursor-pointer hover:opacity-80 flex items-center gap-2 group overflow-hidden">
    Read More
    <img
      src={images.right}
      alt="arrow"
      className="w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    />
  </button>
</div>

  </div>

  
  <div className="flex flex-col w-full  ">
    <div className="py-6 sm:py-8 flex justify-center xl:justify-end">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-10">
        {services.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col items-start text-sm group rounded-lg  p-8 shadow-lg transition-all duration-300  md:w-85 relative 
              ${index === 0 || index === 2 ? ' lg:top-12' : ''}`}
          >
            <div className="sm:p-3 border bg-blue-50 text-white rounded-full group-hover:bg-green-300 group-hover:shadow-lg transition-all duration-300">
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 transition-all duration-300 group-hover:invert group-hover:brightness-0"
              />
            </div>

            <h1 className="whitespace-nowrap mt-3 sm:mt-4 text-blue-900 font-bold text-2xl">
              {card.title}
            </h1>
            <p className="text-lg text-gray-600 text-left mt-1 sm:mt-2 leading-5 sm:leading-6">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
<div className="p-6  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-y-6 gap-x-6 xl:gap-x-0 xl:m-26 justify-items-center ">
        {data.map((item) => (
          <div key={item.id} className="rounded w-70 sm:w-60  xl:w-76 p-5 border border-gray-200 flex items-center gap-3 group hover:border-green-300 hover:cursor-pointer">
            <img src={item.img} alt="" className="h-6 w-6" />
            <a href="#" className="text-blue-900 font-semibold text-lg group-hover:text-green-300">
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-gray-200 relative h-[650px] sm:h-[450px] lg:h-[300px] flex justify-center items-center px-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
    {[
      { number: "232", text: "Happy Clients", image: images.smile },
      { number: "150", text: "Projects Completed", image: images.smile },
      { number: "85", text: "Awards Won", image: images.smile },
      { number: "120", text: "Cups of Coffee", image: images.smile }
    ].map((item, index) => (
      <div
        key={index}
        className="relative rounded bg-white px-20 lg:px-10 xl:px-18 py-8 flex flex-col items-center justify-center shadow-md overflow-visible"
      >
       
        <div className="absolute -top-7 w-13 h-13  flex items-center justify-center bg-white rounded-full shadow-md">
          <img src={item.image} alt="icon" className="w-6  h-6 " />
        </div>

        <div className="text-[#696969] text-4xl font-bold ">{item.number}</div>
        <div className="text-[#696969] text-xs sm:text-sm xl:text-lg">{item.text}</div>
      </div>
    ))}
  </div>
</div>


    </>
  );
};

export default About;
