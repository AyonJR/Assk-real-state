import Image from "next/image";
import { FaPowerOff } from "react-icons/fa6";
import { TbDirectionSignFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { CgIfDesign } from "react-icons/cg";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

const WhyChoose = () => {
  return (
    <div>
      <div className=" w-full bg-slate-100">
        {/* flex div */}
        <div className="lg:px-20 lg:py-28 flex gap-12 mx-auto items-center container w-full">
          {/* image div */}
          <div className="relative">
            <Image
              src="https://i.ibb.co/98Vsnp2/quality.jpg"
              width={500}
              height={500}
              className="w-full h-full object-cover border-8 border-slate-200 transform transition duration-700 hover:scale-125"
            />
            <button className="absolute bottom-20 -left-14  bg-primaryBg text-white px-9 py-5   hover:bg-black transition-colors duration-700">
              More Detail
            </button>
          </div>

          {/* contents */}
          <div>
            <div className="flex flex-col gap-5 ">
              <p className="text-base text-primaryBg font-semibold">
                Our Best Qualities
              </p>
              <h2 className="text-4xl font-semibold">Why Choose Us</h2>
              <div className="flex mt-2">
                <div className="w-10 bg-black h-1"></div>
                <div className="w-10 bg-primaryBg h-1"></div>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                similique at facere in nihil iste quos quibusdam reprehenderit
                quod ea.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-3">
              {/* First grid */}
              <div className="flex gap-3 items-center">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <FaPowerOff size={20} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Furniture</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
              {/* First grid */}
              <div className="flex gap-3 items-center">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <TbDirectionSignFilled size={22} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Best Quality</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
              {/* First grid */}
              <div className="flex gap-3 items-center">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <IoSettingsSharp size={22} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Insurance</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
              {/* First grid */}
              <div className="flex gap-3 items-center mt-12">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <CgIfDesign size={20} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Design</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
              {/* First grid */}
              <div className="flex gap-3 items-center mt-12">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <PiMapPinAreaFill size={20} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
              {/* last grid */}
              <div className="flex gap-3 items-center mt-12">
                <div className="border border-black text-primaryBg hover:bg-primaryBg hover:text-white transition-colors duration-500">
                  <p className="p-5">
                    {" "}
                    <MdSecurity size={20} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Security</p>
                  <p className="text-xs">Looking Amari Way property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
