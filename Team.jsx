import React from 'react'
import images from '../assets/images/images'

const Team = () => {
    return (
        <div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-36 py-10">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg text-gray-500">TEAM</h1>
                    <div className="w-30 border-t border-green-500"></div>
                </div>
                <div className="text-blue-900 text-3xl font-bold">CHECK OUR TEAM </div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                <div className='py-15 relative  '>
                    <img src={images.t1} alt="" className='w-104' />
                    <div className='absolute bottom-14 bg-white shadow-lg p-4 space-y-2  xl:w-95 ml-5 transform translate-y-1/2 '>
                        <h1 className='text-blue-950 font-semibold text-lg'>Walter White</h1>
                        <div className="w-15 border-t border-gray-500"></div>
                        <div className='flex gap-1   xl:gap-26'>
                            <div className='text-gray-500 text-xs xl:text-sm'>Chief Executive Officer</div>
                            <div className="flex flex-row gap-1">
                                <img src={images.fb} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.whatsapp} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.instagram} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.lin} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-15 relative '>
                    <img src={images.t2} alt="" className='w-104' />
                    <div className='absolute bottom-14 bg-white shadow-lg p-4 space-y-2    xl:w-95 ml-5 transform translate-y-1/2'>
                        <h1 className='text-blue-950 font-semibold text-lg'>Sarah Jhonson</h1>
                        <div className="w-15 border-t border-gray-500"></div>
                        <div className='flex gap-4 xl:gap-36'>
                            <div className='text-gray-500 text-sm'>Product Manager</div>
                            <div className="flex flex-row gap-1">
                                <img src={images.fb} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.whatsapp} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.instagram} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.lin} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-15 relative '>
                    <img src={images.t3} alt="" className='w-104' />
                    <div className='absolute bottom-14 bg-white shadow-lg p-4 space-y-2    xl:w-95 ml-5 transform translate-y-1/2'>
                        <h1 className='text-blue-950 font-semibold text-lg'>William Anderson</h1>
                        <div className="w-15 border-t border-gray-500"></div>
                        <div className='flex gap-24 xl:gap-56'>
                            <div className='text-gray-500 text-sm'>CTO</div>
                            <div className="flex flex-row gap-1">
                                <img src={images.fb} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.whatsapp} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.instagram} alt="" className="w-6 h-6 hover:cursor-pointer hover-green" />
                                <img src={images.lin} alt="" className="w-4 h-6 hover:cursor-pointer hover-green" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Team