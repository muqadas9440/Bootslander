import React from 'react'
import images from '../assets/images/images';
const Footer = () => {
    return (
        <>
            <div className="w-full bg-blue-950 py-14  ">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 sm:px-20 md:px-30 lg:px-40"
                >
                    <div>
                        <h1 className="text-3xl pb-4  text-white font-bold">Bootslander
                        </h1>
                        <div className="space-y-2 pt-4">
                            <SimpleLink text="A108 Adam Street" />
                            <SimpleLink text="New York, NY 535022" />
                            <div className='flex gap-1 '>
                                <div className='text-white font-semibold hover:text-[#8ed8f5]'>Phone:</div>
                                <div className='text-sm text-white hover:text-[#8ed8f5] '>+1 5589 55488 55</div>
                            </div>
                            <div className='flex gap-1 '>
                                <div className='text-white font-semibold hover:text-[#8ed8f5]'>Email:</div>
                                <div className='text-sm text-white hover:text-[#8ed8f5] '> info@example.com</div>
                            </div>
                            <div className="flex flex-row gap-3 ">
                                <div className="w-10 h-10 rounded-full  shadow-lg border border-gray-500 hover:border-green-500  flex items-center justify-center">
                                    <img src={images.fb} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" /> </div>
                                <div className="w-10 h-10 rounded-full  shadow-lg border border-gray-500 hover:border-green-500  flex items-center justify-center">
                                    <img src={images.whatsapp} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" /></div>
                                <div className="w-10 h-10 rounded-full  shadow-lg border border-gray-500 hover:border-green-500  flex items-center justify-center">
                                    <img src={images.instagram} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" /></div>
                                <div className="w-10 h-10 rounded-full  shadow-lg border border-gray-500 hover:border-green-500  flex items-center justify-center">
                                    <img src={images.lin} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" /></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-lg text-white font-semibold">Useful Links</h1>
                        <div className="space-y-2 pt-4">
                            <SimpleLink text="Web Development" />
                            <SimpleLink text="Graphic Design" />
                            <SimpleLink text="Product Management" />
                            <SimpleLink text="Web Design
" />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-lg  text-white  font-semibold">INFO</h1>
                        <div className="space-y-2 pt-4">
                            <SimpleLink text="Contact US" />
                            <SimpleLink text="About" />
                            <SimpleLink text="Terms & Conditions" />
                            <SimpleLink text="Privacy Policy" />
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h1 className="text-lg  text-white  font-semibold">Our Newsletter</h1>
                        <SimpleLink text="Subscribe to our newsletter and receive the latest news about our products and services" />

                        <div className="relative w-full">
                            <input
                                type="email"
                                className="w-full p-2 pr-20 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-300 rounded-md"
                            />
                            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-300 text-white px-4 py-2 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    
                    


                    </div>


                </div>
              <div className='pt-10'>  <hr className="w-3/4 mx-auto  text-white opacity-10 border-white border-t" />
              </div>
           
        <div className='items-center justify-center flex flex-col  space-y-1  px-10 '>   <div className='text-white pt-5'>
            © Copyright <span className='font-bold'>Bootslander</span> All Rights Reserved
            </div>
           
            <div className='text-white'>Designed by <span className='text-green-300 '>BootstrapMade</span> Distributed By <span className='text-green-300'>ThemeWagon</span></div> </div>
            </div>
        </>
    );
}

const SimpleLink = ({ text }) => (
    <a href="#" className="block text-xs sm:text-sm text-white hover:text-[#8ed8f5] ">
        {text}
    </a>
);

export default Footer