
import React, { useState, useEffect } from "react";
import { navLinks } from "../Utils/utils";
import images from "../assets/images/images";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let link of navLinks) {
        if (!link.href) continue;
        const section = link.href.replace("#", "");
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="bg-blue-950 fixed top-0 left-0 w-full z-50 py-6 md:p-6 transition-all duration-300">
      <div className="mx-auto flex justify-between items-center px-4 xl:px-10  xl:pl-30 xl:pr-34">
        <div className="text-white text-3xl font-bold">Bootslander</div>

        <button
          className="text-white text-xl xl:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          &#9776;
        </button>

        <ul className="hidden xl:flex space-x-8 text-white">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative leading-10">
              {link.subLinks ? (
                <div className="relative group">
                
                  <div className="flex items-center gap-1 cursor-pointer">
                    <button
                      className={`text-white font-medium transition-all ${activeSection === link.href?.replace("#", "") ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                        }`}
                    >
                      {link.label}
                    </button>
                    {link.isDropdown && <img src={images.arrow} alt="" className="h-4 w-4" />}
                  </div>

                  {link.isDropdown && (
                    <ul className="absolute left-0 mt-2 w-50 bg-white text-black rounded-lg shadow-lg transition-all transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 visible group-hover:block">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex} className="relative dropdown-group">

                          <button
                            onClick={() => handleNavClick(subLink.href?.replace("#", ""))}
                            className={`flex items-center justify-between w-full text-left px-4 py-2 hover:text-green-400 transition-all ${activeSection === subLink.href?.replace("#", "") ? "opacity-100" : "opacity-80"
                              }`}
                          >
                            {subLink.label}
                          </button>


                          {subLink.isDropdown && (
                            <ul className="absolute right-full top-0 mt-0 w-55 bg-white text-black rounded-lg shadow-lg transition-all transform opacity-0 scale-95 dropdown-group-hover:opacity-100 dropdown-group-hover:scale-100 hidden dropdown-group-hover:block">
                              {subLink.subLinks.map((deepSubLink, deepIndex) => (
                                <li key={deepIndex}>
                                  <button
                                    onClick={() => handleNavClick(deepSubLink.href?.replace("#", ""))}
                                    className={`block w-full text-left px-4 py-2 hover:text-green-400 transition-all ${activeSection === deepSubLink.href?.replace("#", "") ? "opacity-100" : "opacity-80"
                                      }`}
                                  >
                                    {deepSubLink.label}

                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href.replace("#", ""))}
                  className={`text-white font-medium transition-all ${activeSection === link.href?.replace("#", "") ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                    }`}
                >
                  {link.label}
                </button>
              )}

              <span
                className={`absolute left-0 bottom-0 w-6 h-0.5 bg-blue-300 transition-all ${activeSection === link.href?.replace("#", "") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>





      {isMobileMenuOpen && (
  <ul className="flex flex-col space-y-2 bg-white text-lg px-4 rounded-lg font-medium p-4 xl:hidden max-h-[80vh] overflow-y-auto ">
    {navLinks.map((link, index) => (
      <li key={index} className="relative">
        {link.subLinks ? (
          <>
           
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => handleNavClick(link.href?.replace("#", ""))}
                className="block w-full py-2 text-left border-b border-transparent hover:border-white "
              >
                {link.label}
              </button>
              <div
                className={`rounded-full w-7 h-7 relative transition-colors ${
                  openDropdown === index ? "bg-green-300" : "bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === index ? null : index);
                }}
              >
                <img
                  src={images.green}
                  alt=""
                  className={`h-4 w-4 cursor-pointer transition-transform absolute top-1.5 left-1/2 transform -translate-x-1/2 ${
                    openDropdown === index ? "rotate-180 filter brightness-0 invert" : ""
                  }`}
                />
              </div>
            </div>

          
            {openDropdown === index && (
              <ul className="pl-4 mt-1 space-y-1 max-h-60 overflow-y-auto bg-gray-100 rounded-md">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex} className="relative">
                    {subLink.subLinks ? (
                      <>
                       
                        <div className="flex items-center justify-between w-full">
                          <button
                            onClick={() => handleNavClick(subLink.href?.replace("#", ""))}
                            className="block w-full py-2 px-4 text-left hover:bg-blue-600 rounded-lg"
                          >
                            {subLink.label}
                          </button>
                          <div
                            className={`rounded-full w-7 h-7 relative transition-colors ${
                              openDropdown === `${index}-${subIndex}` ? "bg-green-300" : "bg-gray-200"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdown(
                                openDropdown === `${index}-${subIndex}` ? null : `${index}-${subIndex}`
                              );
                            }}
                          >
                            <img
                              src={images.green}
                              alt=""
                              className={`h-4 w-4 cursor-pointer transition-transform absolute top-1.5 left-1/2 transform -translate-x-1/2 ${
                                openDropdown === `${index}-${subIndex}` ? "rotate-180 filter brightness-0 invert" : ""
                              }`}
                            />
                          </div>
                        </div>

                      
                        {openDropdown === `${index}-${subIndex}` && (
                          <ul className="pl-4 mt-1 space-y-1 max-h-60 overflow-y-auto bg-gray-200 rounded-md">
                            {subLink.subLinks.map((deepSubLink, deepIndex) => (
                              <li key={deepIndex}>
                                <button
                                  onClick={() => handleNavClick(deepSubLink.href.replace("#", ""))}
                                  className="block w-full py-2 px-4 text-left hover:bg-blue-600 rounded-lg"
                                >
                                  {deepSubLink.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(subLink.href.replace("#", ""))}
                        className="block w-full py-2 px-4 text-left hover:bg-blue-600 rounded-lg"
                      >
                        {subLink.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <button
            onClick={() => handleNavClick(link.href.replace("#", ""))}
            className="block w-full py-2 text-left border-b border-transparent hover:border-white"
          >
            {link.label}
          </button>
        )}
      </li>
    ))}
  </ul>
)}

    </nav>
  );
};

export default Navbar;