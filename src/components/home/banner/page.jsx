import { FaBed, FaBath, FaCar, FaRulerCombined, FaRegHeart } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import AOSBanner from "../aosBanner/page";

const Banner = () => {
  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      {/* Include AOS Initializer */}
      <AOSBanner />

      {/* Parallax Banner Image */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: "url('https://i.ibb.co/WPYYZxV/1769105246694524.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      ></div>

      {/* Card */}
      <div
        data-aos="fade-up"
        className="mr-[110px] flex absolute inset-0 items-center justify-end"
      >
        <div className="bg-primaryBg mb-[312px]">
          <div className="px-4 py-2">
            <MdMapsHomeWork className="text-white" size={40} />
            <p className="text-xl font-medium text-white">SALE</p>
          </div>
        </div>

        <div>
          <div className="bg-black bg-opacity-60 text-white p-10 w-[400px]">
            {/* Heading */}
            <h1 className="text-4xl font-semibold mb-4">Assk Amari Way</h1>
            {/* Location */}
            <p className="text-lg font-medium mb-8">
              Gulshan-1, Dhaka, Bangladesh
            </p>
            {/* Details */}
            <div className="grid grid-cols-4 gap-6 text-center">
              <div data-aos="zoom-in" className="flex flex-col items-center gap-1 text-lg">
                <FaBed className="text-white" size={28} />
                <div className="mt-2">
                  <p className="text-white text-lg font-medium">2</p>
                  <p className="text-gray-300 text-lg font-medium">Bed</p>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col items-center gap-1 text-lg">
                <FaBath className="text-white" size={28} />
                <div className="mt-2">
                  <p className="text-white text-lg font-medium">3</p>
                  <p className="text-gray-300 text-lg font-medium">Bath</p>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col items-center gap-1 text-lg">
                <FaCar className="text-white" size={28} />
                <div className="mt-2">
                  <p className="text-white text-lg font-medium">2</p>
                  <p className="text-gray-300 text-lg font-medium">Garage</p>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col items-center gap-1 text-lg">
                <FaRulerCombined className="text-white" size={28} />
                <div className="mt-2">
                  <p className="text-white text-lg font-medium">3600</p>
                  <p className="text-gray-300 text-lg font-medium">Sq. ft.</p>
                </div>
              </div>
            </div>
            {/* hr */}
            <div className="mt-8">
              <hr />
            </div>
            {/* price */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-3xl font-extrabold">
                  $ 1200{" "}
                  <span className="text-lg font-medium">/ per month</span>
                </div>
                <div>
                  <FaRegHeart className="text-primaryBg" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
