import React from 'react'
import images from '../assets/images/images'
const Features = () => {
    return (
        <div>
            <div className=" flex flex-col gap-15 px-4 sm:px-8 md:px-16 lg:px-14 xl:px-32 py-10 ">
                <div>
                    <div className='flex items-center gap-4'>
                        <h1 className="text-lg  text-gray-500 ">
                            DETAILS
                        </h1>
                        <div className="w-30  border-t  border-green-500"></div>

                    </div>
                    <div className='text-blue-900 text-3xl font-bold'>
                        CHECK OUR DETAILS
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row xl:py-6 gap-5">


                    <img src={images.F1} alt="Performance Solution" className=' w-100 sm:w-70 sm:h-100 lg:w-90 lg:h-110 xl:h-160 xl:w-130' />

                    <div className='sm:w-180 py-1 lg:py-20 xl:py-44'>
                        <h1 className="text-2xl xl:text-3xl text-blue-900 font-bold ">
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h1>
                        <p className="text-[#6c757d] text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <div className='leading-10 '>
                                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li>  Ullam est qui quos consequatur eos accusamus.</li>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row xl:py-6 gap-5">




<div className='sm:w-180 py-1 lg:py-20 xl:py-44'>
    <h1 className="text-2xl xl:text-3xl text-blue-900 font-bold ">
        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
    </h1>
    <p className="text-[#6c757d] text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <div className='leading-10 '>
            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li>  Ullam est qui quos consequatur eos accusamus.</li>
        </div>
    </p>
</div>
<img src={images.F2} alt="Performance Solution" className=' w-100 sm:w-70 sm:h-100 lg:w-90 lg:h-110 xl:h-160 xl:w-130' />
</div>


<div className="flex flex-col sm:flex-row xl:py-6 gap-5">


<img src={images.F3} alt="Performance Solution" className=' w-100 sm:w-70 sm:h-100 lg:w-90 lg:h-110 xl:h-160 xl:w-130' />

<div className='sm:w-180 py-1 lg:py-20 xl:py-44'>
    <h1 className="text-2xl xl:text-3xl text-blue-900 font-bold ">
        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
    </h1>
    <p className="text-[#6c757d] text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <div className='leading-10 '>
            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li>  Ullam est qui quos consequatur eos accusamus.</li>
        </div>
    </p>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:py-6 gap-5">


<div className='sm:w-180 py-1 lg:py-20 xl:py-44'>
    <h1 className="text-2xl xl:text-3xl text-blue-900 font-bold ">
        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
    </h1>
    <p className="text-[#6c757d] text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <div className='leading-10 '>
            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li>  Ullam est qui quos consequatur eos accusamus.</li>
        </div>
    </p>
</div>
<img src={images.F4} alt="Performance Solution" className=' w-100 sm:w-70 sm:h-100 lg:w-90 lg:h-110 xl:h-160 xl:w-130' />
</div>

            </div>

        </div>
    )
}

export default Features;