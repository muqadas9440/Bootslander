import React from 'react'
import { plans } from '../Utils/utils'
const Pricing = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-36 py-10">
      <div className="flex items-center gap-4">
        <h1 className="text-lg text-gray-500">PRICING</h1>
        <div className="w-30 border-t border-green-500"></div>
      </div>
      <div className="text-blue-900 text-3xl font-bold">CHECK OUR PRICING</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative border rounded-lg  p-6 bg-[#f5fdfb] shadow-md border-[#F8F9FA] group "
          >
           {index === 1 && (
  <div
    className="absolute top-3 right-3 px-3 py-2 text-sm rounded-md transition-colors duration-300 bg-green-300 text-white font-bold "
  >
    Popular
  </div>
)}

            <div className='text-2xl p-2 font-semibold text-blue-900'>
              {plan.title}
            </div>
            <div className="text-gray-500 text-sm font-semibold "> Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater  </div>
            <div className='flex gap-1 p-4 '>
              <div className='text-3xl text-green-300 font-bold'>$</div>
              <div className='text-5xl text-green-300 font-bold'>
                {plan.price}
              </div> <sub className='text-gray-500 text-xl top-4'>/ month</sub>
            </div>
            <div
              className={`relative py-2 px-6  rounded-md transition-colors duration-300 ${index === 1
                ? "bg-green-300 text-white hover:cursor-pointer"
                : "bg-[#f5fdfb] group-hover:bg-green-300 group-hover:text-white hover:cursor-pointer border-black border group-hover:border-gray-50 text-gray-500"
                }`}
            >
              <div className="flex justify-center items-center ">
                <div className="text-center text-lg  font-medium hover:cursor-pointer">{plan.description}</div>

              </div>

            </div>



            <div className="p-4 ">
              <ul className="text-gray-500 text-lg space-y-2 leading-7 list-disc pl-5">
                <li className="text-center text-sm font-semibold list-none">No credit card required</li>
                <li>Quam adipiscing vitae proin</li>
                <li>Nec feugiat nisl pretium</li>
                <li>Nulla at volutpat diam uteera</li>
                <li>Pharetra massa massa ultricies</li>
                <li>Massa ultricies mi quis hendrerit</li>
                <li>Voluptate id voluptas qui sed aperiam rerum</li>
                <li>Iure nihil dolores recusandae odit voluptatibus</li>
              </ul>



            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Pricing