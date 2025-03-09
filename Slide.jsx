import { useState } from "react";
import { slideContent } from "../Utils/utils";
import images from "../assets/images/images";

const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideContent.length) % slideContent.length);
  };

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
     
      <img src={images.s1} alt="Background" className="w-full h-full object-cover" />

    
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: "100%" }}
        >
          {slideContent.slice(0, 5).map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
              <div className="relative  p-6 rounded-lg text-center ">
              
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2    w-24 h-24 bg-white/50 p-2 rounded-full shadow-md">
                  <img src={images.icon} alt="Icon" className="w-full h-full rounded-full" />
                </div>
                <h1 className="text-xl font-bold text-white ">{slide.title}</h1>
                <p className="text-gray-300">{slide.role}</p>
                <p className=" lg:px-40 text-sm lg:text-lg text-white mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slideContent.slice(0, 5).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
