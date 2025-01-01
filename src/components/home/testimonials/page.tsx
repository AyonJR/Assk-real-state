"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaQuoteLeft, FaRegStar, FaStar, FaQuoteRight } from "react-icons/fa";
import Blogs from "../blogs/page";

const Testimonials = () => {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="px-10 mx-auto container">
      <div className="flex w-full gap-5">
        <div className="w-1/2">
          <div className="py-12  text-black">
            {/* Testimonials Section */}
            <div className="container mx-auto px-6">
              <div className="flex flex-col gap-5 ">
                <p className="text-base text-primaryBg font-semibold">
                  Testimonial
                </p>
                <h2 className="text-4xl font-semibold">Why Client Say</h2>
                <div className="flex mt-2">
                  <div className="w-10 bg-black h-1"></div>
                  <div className="w-10 bg-primaryBg h-1"></div>
                </div>
              </div>
              <div className="glide-05 relative w-full mt-10">
                {/* Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                  <ul className="relative flex w-full overflow-hidden p-0">
                    <li className="">
                      <div className="w-[100%] bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
                        <img
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt="demo/image"
                          className="w-[150px] h-[150px] object-cover rounded-full"
                        />
                        <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                          Jhone Dehon
                        </h3>
                        <p className="text-text text-[0.9rem]">London</p>

                        <div className="flex items-center gap-1 my-4">
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaRegStar className="text-primaryBg text-[1.3rem]" />
                        </div>

                        <div className="relative">
                          <p className=" text-justify text-[0.9rem] my-3 text-text ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque nesciunt saepe quam doloremque nulla
                            cumque vero sequi, repellendus vel reiciendis? Eos
                            totam quidem ducimus amet, in fuga quia minus ab!
                          </p>
                          <FaQuoteRight className="text-[3rem] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                          <FaQuoteLeft className="text-[3rem] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="w-[100%] bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
                        <img
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt="demo/image"
                          className="w-[150px] h-[150px] object-cover rounded-full"
                        />
                        <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                          Jhone Dehon
                        </h3>
                        <p className="text-text text-[0.9rem]">London</p>

                        <div className="flex items-center gap-1 my-4">
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaRegStar className="text-primaryBg text-[1.3rem]" />
                        </div>

                        <div className="relative">
                          <p className=" text-justify text-[0.9rem] my-3 text-text ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque nesciunt saepe quam doloremque nulla
                            cumque vero sequi, repellendus vel reiciendis? Eos
                            totam quidem ducimus amet, in fuga quia minus ab!
                          </p>
                          <FaQuoteRight className="text-[3rem] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                          <FaQuoteLeft className="text-[3rem] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="w-[100%] bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
                        <img
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt="demo/image"
                          className="w-[150px] h-[150px] object-cover rounded-full"
                        />
                        <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                          Jhone Dehon
                        </h3>
                        <p className="text-text text-[0.9rem]">London</p>

                        <div className="flex items-center gap-1 my-4">
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaRegStar className="text-primaryBg text-[1.3rem]" />
                        </div>

                        <div className="relative">
                          <p className=" text-justify text-[0.9rem] my-3 text-text ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque nesciunt saepe quam doloremque nulla
                            cumque vero sequi, repellendus vel reiciendis? Eos
                            totam quidem ducimus amet, in fuga quia minus ab!
                          </p>
                          <FaQuoteRight className="text-[3rem] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                          <FaQuoteLeft className="text-[3rem] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="w-[100%] bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
                        <img
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt="demo/image"
                          className="w-[150px] h-[150px] object-cover rounded-full"
                        />
                        <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                          Jhone Dehon
                        </h3>
                        <p className="text-text text-[0.9rem]">London</p>

                        <div className="flex items-center gap-1 my-4">
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaStar className="text-[1.3rem] text-primaryBg" />
                          <FaRegStar className="text-primaryBg text-[1.3rem]" />
                        </div>

                        <div className="relative">
                          <p className=" text-justify text-[0.9rem] my-3 text-text ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque nesciunt saepe quam doloremque nulla
                            cumque vero sequi, repellendus vel reiciendis? Eos
                            totam quidem ducimus amet, in fuga quia minus ab!
                          </p>
                          <FaQuoteRight className="text-[3rem] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                          <FaQuoteLeft className="text-[3rem] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Indicators */}
                <div
                  className="flex w-full items-center justify-center gap-2 mt-6"
                  data-glide-el="controls[nav]"
                >
                  <button
                    className="group p-4"
                    data-glide-dir="=0"
                    aria-label="goto slide 1"
                  >
                    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-primaryBg transition-colors duration-300 focus:outline-none"></span>
                  </button>
                  <button
                    className="group p-4"
                    data-glide-dir="=1"
                    aria-label="goto slide 2"
                  >
                    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-primaryBg transition-colors duration-300 focus:outline-none"></span>
                  </button>
                  <button
                    className="group p-4"
                    data-glide-dir="=2"
                    aria-label="goto slide 3"
                  >
                    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-primaryBg transition-colors duration-300 focus:outline-none"></span>
                  </button>
                  <button
                    className="group p-4"
                    data-glide-dir="=3"
                    aria-label="goto slide 4"
                  >
                    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-primaryBg transition-colors duration-300 focus:outline-none"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-12">
          <Blogs></Blogs>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
