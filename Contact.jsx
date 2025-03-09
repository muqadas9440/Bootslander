import React from 'react'
import images from '../assets/images/images'
const Contact = () => {
  return (
    <div>
         <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-36 py-10">
        <div className="flex items-center gap-4">
          <h1 className="text-lg text-gray-500">CONTACT</h1>
          <div className="w-30 border-t border-green-500"></div>
        </div>
        <div className="text-blue-900 text-3xl font-bold">CHECK OUR CONTACT</div>
      </div>
      <div className=" sm:p-4  text-xs   relative flex flex-col lg:flex-row ">
      <div className=" flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-14 xl:px-36 md:mt-0 space-y-6">
      <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full  shadow-lg bg-green-100 group-hover:bg-green-300 flex items-center justify-center">
              <img src={images.location} alt="Icon" className="w-5 h-5 group-hover:invert group-hover:brightness-0 " />
            </div>
            <div className='flex flex-col'> <div className='text-blue-900 text-lg font-bold'>Address</div> 
            <p className="text-gray-600 text-sm"> 3179 Raccoon Run Seattle, WA 98109</p></div>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full  shadow-lg bg-green-100 flex items-center justify-center group-hover:bg-green-300">
              <img src={images.phone} alt="Icon" className="w-5 h-5 group-hover:invert group-hover:brightness-0 " />
            </div>
            <div className='flex flex-col'> <div className='text-blue-900 text-lg font-bold'>Call Us</div> 
            <p className="text-gray-600 text-sm"> 012-345-6789</p> </div>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full  shadow-lg bg-green-100 flex items-center justify-center group-hover:bg-green-300">
              <img src={images.email} alt="Icon" className="w-5 h-5 group-hover:invert group-hover:brightness-0 " />
            </div>
           <div className='flex flex-col'> <div className='text-blue-900 text-lg font-bold'>Email Us</div> 
            <p className="text-gray-600 text-sm"> youremailid@gmail.com</p></div>
          </div>
          

         
        </div>

        <form className="py-8 lg:py-0 space-y-6 w-full max-w-3xl px-4 xl:px-0 sm:px-8 md:px-16 ">
          <div className="flex flex-col md:flex-row gap-4 p-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-300"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-300"
              />
            </div>
          </div>

          <div className="px-2">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-300"
            />
          </div>

          <div className="px-2">
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-300"
            ></textarea>
          </div>

          <button className="bg-green-300 text-white px-6 py-3 font-semibold text-xs md:text-sm hover:cursor-pointer rounded-full mx-auto block">
  Send Message
</button>

        </form>

       
      </div>

    </div>
  )
}

export default Contact