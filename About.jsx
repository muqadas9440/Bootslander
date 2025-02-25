import React from 'react';
import { services } from '../Utils/utils';
import images from '../assets/images/images';

const About = () => {
  return (
    <>

<div className="flex flex-col md:flex-row px-4 sm:px-12 md:px-24 lg:px-36 py-5 gap-5">
  
  <div className="flex flex-col gap-5 w-full md:w-200 mt-40">
    <div className='text-lg rounded-md px-5 py-2 w-30 bg-green-50 text-green-300'>About Us</div>
    <h1 className="text-xl lg:text-4xl font-bold text-blue-900">
      Ducimus rerum libero reprehenderit cumque
    </h1>
    <p className="text-gray-600 text-xs sm:text-lg leading-6 sm:leading-7">
      Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
    </p>
    <div className='flex flex-row gap-4'>
      <button className="bg-green-300 rounded-md text-white px-5 py-2 text-xs md:text-lg hover:cursor-pointer flex items-center gap-2">
        Read More
        <img src={images.right} alt="arrow" className="w-6" />
      </button>
    </div>
  </div>

  
  <div className="flex flex-col w-full ">
    <div className="py-6 sm:py-8 flex justify-end">
      <div className="grid grid-cols-2 gap-2 sm:gap-5">
        {services.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col items-start text-sm group rounded-lg p-4 sm:p-8 shadow-lg transition-all duration-300 w-full sm:w-64 lg:w-85 relative 
              ${index === 0 || index === 2 ? 'top-4 sm:top-12' : ''}`}
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
      
    </>
  );
};

export default About;
