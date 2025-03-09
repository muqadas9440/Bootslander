import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faqData } from "../Utils/utils";
import images from "../assets/images/images";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 lg:p-16  bg-[#f5fdfb] flex flex-col-reverse lg:flex-row gap-8 xl:gap-16 ">
        <div>  <div className="text-3xl sm:text-4xl  mb-4 text-blue-900 flex flex-col sm:flex-row gap-2">Frequently Asked <div className="font-bold ">Questions</div>
           </div> 
            <p className="text-gray-700 text-sm sm:text-lg  pb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p> 
            <div className=" space-y-7 ">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded shadow text-gray-700 bg-white custom-width transition-all duration-300 ${openIndex === index ? "bg-blue-50" : ""
                            }`}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3
                                className={`font-semibold text-lg ${openIndex === index ? "text-green-300 " : "text-blue-900 hover:text-green-300"
                                    }`}
                            >
                                {item.question}
                            </h3>
                            <FontAwesomeIcon
                                icon={openIndex === index ? faChevronDown : faChevronRight}
                                className={`font-semibold text-lg ${openIndex === index ? "text-green-300 " : "text-gray-400 hover:text-green-300"
                                }`}
                            />
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-600 text-lg">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            </div>
            <img src={images.faq} alt="" className="lg:w-100 xl:w-155 " /> 
        </div>
    );
};

export default FAQ;
