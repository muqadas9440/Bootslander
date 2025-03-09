
import React, { useState } from "react";
import { gallery } from "../Utils/utils";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-36 py-10">
        <div className="flex items-center gap-4">
          <h1 className="text-lg text-gray-500">GALLERY</h1>
          <div className="w-30 border-t border-green-500"></div>
        </div>
        <div className="text-blue-900 text-3xl font-bold">CHECK OUR GALLERY</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-content-center gap-1 py-5 px-4 sm:px-5 md:px-10 lg:px-20 xl:px-36">
        {gallery.map((card, index) => (
          <div key={card.id} className="relative overflow-hidden w-full group">
            <img
              src={card.icon}
              alt={card.title}
              className="w-full object-cover rounded transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              onClick={() => openModal(index)}
            />

            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 text-white text-lg font-semibold"
                onClick={(event) => {
                  event.preventDefault();
                  openModal(index);
                }}
              >
              </a>
            )}

          </div>
        ))}
      </div>


      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button className="absolute top-2 right-[-300px] text-white text-2xl hover:cursor-pointer" onClick={closeModal}>
              ✖
            </button>
            <button
              className="absolute top-1/2 left-[-300px] transform -translate-y-1/2 text-white text-5xl hover:cursor-pointer"
              onClick={prevImage}
            >
              {"<"}
            </button>
            <img
              src={gallery[currentIndex].icon}
              alt={gallery[currentIndex].title}
              className="max-w-[100vw] max-h-[95vh] hover:"
            />
            <button
              className="absolute top-1/2 right-[-300px] transform -translate-y-1/2 text-white text-5xl hover:cursor-pointer"
              onClick={nextImage}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;