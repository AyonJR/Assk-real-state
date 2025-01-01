import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import FooterInfo from "../footerInfo/page";
import Image from "next/image";
import { BsCursorFill } from "react-icons/bs";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="h-[730px] w-full relative">
        <div className="absolute inset-0 bg-[#1A1D1F] w-full">
          <div className="px-16 mx-auto container ">
            {/* logo and all */}
            <div className="bg-[#272C2F] w-full h-[140px] flex items-center ">
              <div className="flex items-center justify-between px-20 w-full">
                {/* logo */}
                <div>
                  <Image
                    src="https://i.ibb.co/f4KcgpB/ogg.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                {/* input */}
                <div className="flex items-center">
                  <input
                    className="w-[360px] h-[45px] px-4 text-gray-600 placeholder:text-gray-400 placeholder:px-2 border border-gray-300 "
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button className="h-[45px] bg-primaryBg text-white flex items-center justify-center px-4">
                    <BsCursorFill size={20} />
                  </button>
                </div>

                {/* social icons */}
                <div>
                  {/* Social Icons */}
                  <div className="flex gap-4">
                    {/* Facebook */}
                    <button className="w-10 h-10 bg-transparent border border-white text-white rounded-full flex items-center justify-center hover:bg-primaryBg hover:border-primaryBg transition-colors duration-500">
                      <FaFacebookF size={16} />
                    </button>

                    {/* Twitter */}
                    <button className="w-10 h-10 bg-transparent border border-white text-white rounded-full flex items-center justify-center hover:bg-primaryBg hover:border-primaryBg transition-colors duration-500">
                      <FaTwitter size={16} />
                    </button>

                    {/* LinkedIn */}
                    <button className="w-10 h-10 bg-transparent border border-white text-white rounded-full flex items-center justify-center hover:bg-primaryBg hover:border-primaryBg transition-colors duration-500">
                      <FaLinkedin size={16} />
                    </button>

                    {/* Google */}
                    <button className="w-10 h-10 bg-transparent border border-white text-white rounded-full flex items-center justify-center hover:bg-primaryBg hover:border-primaryBg transition-colors duration-500">
                      <FaGoogle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* all the links */}
            <div className="mt-12 w-full flex ">
              {/* Get in touch and properties */}
              <div className="w-1/2 flex gap-8">
                {/* get in touch */}
                <div>
                  <h2 className="text-2xl text-primaryBg font-normal">
                    Get in Touch
                  </h2>
                  <div className="w-14 h-1 bg-[#272C2F] mt-3  "></div>
                  <p className="mt-3 text-white  leading-[1.8]">
                    Shina Real Estate brings wide range of choice,
                    <br /> steadily updated property list and market trend{" "}
                    <br /> for you to figure out your right decision.It is a{" "}
                    <br />
                    premium WordPress theme for real estate where <br /> modern
                    aesthetics are combined with tasteful <br /> simplicity.
                  </p>
                </div>
                {/* properties */}
                <div>
                  <h2 className="text-2xl text-primaryBg font-normal">
                    Properties
                  </h2>
                  <div className="w-14 h-1 bg-[#272C2F] mt-3"></div>
                  <div className="mt-3 ">
                    <div className="flex items-center gap-5 -ml-1">
                      <p className="text-primaryBg">
                        <MdChevronRight size={22} />
                      </p>
                      <p className="text-white ">Garage Inclusive</p>
                    </div>
                    <div className="flex items-center gap-5 -ml-1 mt-3">
                      <p className="text-primaryBg">
                        <MdChevronRight size={22} />
                      </p>
                      <p className="text-white ">Free Wifi</p>
                    </div>
                    <div className="flex items-center gap-5 -ml-1 mt-3">
                      <p className="text-primaryBg">
                        <MdChevronRight size={22} />
                      </p>
                      <p className="text-white ">All inclusive</p>
                    </div>
                    <div className="flex items-center gap-5 -ml-1 mt-3">
                      <p className="text-primaryBg">
                        <MdChevronRight size={22} />
                      </p>
                      <p className="text-white ">Hotel Room Service</p>
                    </div>
                    <div className="flex items-center gap-5 -ml-1 mt-3">
                      <p className="text-primaryBg">
                        <MdChevronRight size={22} />
                      </p>
                      <p className="text-white ">Laxury Bedroom</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* links and contact info */}
              <div className="w-1/2 flex gap-8 justify-between ">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl text-primaryBg font-normal">
                      links
                    </h2>
                    <div className="w-14 h-1 bg-[#272C2F] mt-3"></div>
                    <div className="mt-3 ">
                      <div className="flex items-center gap-5 -ml-1">
                        <p className="text-primaryBg">
                          <MdChevronRight size={22} />
                        </p>
                        <p className="text-white ">About Us</p>
                      </div>
                      <div className="flex items-center gap-5 -ml-1 mt-3">
                        <p className="text-primaryBg">
                          <MdChevronRight size={22} />
                        </p>
                        <p className="text-white ">Blog</p>
                      </div>
                      <div className="flex items-center gap-5 -ml-1 mt-3">
                        <p className="text-primaryBg">
                          <MdChevronRight size={22} />
                        </p>
                        <p className="text-white ">Blog Grid</p>
                      </div>
                      <div className="flex items-center gap-5 -ml-1 mt-3">
                        <p className="text-primaryBg">
                          <MdChevronRight size={22} />
                        </p>
                        <p className="text-white ">Contact</p>
                      </div>
                      <div className="flex items-center gap-5 -ml-1 mt-3">
                        <p className="text-primaryBg">
                          <MdChevronRight size={22} />
                        </p>
                        <p className="text-white ">Our Agents</p>
                      </div>
                    </div>
                  </div>
                  <div>
                  <h2 className="text-2xl text-primaryBg font-normal">
                      Contact Info
                    </h2>
                    <div className="w-14 h-1 bg-[#272C2F] mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterInfo></FooterInfo>
    </div>
  );
};

export default Footer;
