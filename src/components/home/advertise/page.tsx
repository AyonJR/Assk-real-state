"use client"
import { IoIosPeople } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import CountUp from "react-countup";

const Advertise = () => {
  return (
    <div className="w-full relative">
      {/* Background Image */}
      <div
        className="lg:h-[400px] w-full relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/n12CNdB/pexels-pixabay-276583.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 flex w-full justify-between items-center">
          {/* Flex Container */}
          <div className="flex w-full  justify-between lg:px-16 mx-auto container items-center">
            {/* Text Div */}
            <div>
              <div className="flex items-center justify-between ">
                <h2 className="text-3xl font-bold text-white relative z-10">
                  We are creative <br /> Architecture <br />
                  Design agency
                </h2>
                <div className="h-[300px] w-[180px] border-[6px] border-[#4C4E54] relative right-16"></div>
              </div>
            </div>
            {/* Items Div */}
            <div className="flex items-center gap-24">
      {/* Happy Clients */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-primaryBg">
          <IoIosPeople size={70} />
        </h2>
        <p className="text-xl text-white">Happy Clients</p>
        <p className="text-4xl text-white font-bold">
          <CountUp end={2180} duration={3} />
        </p>
      </div>

      {/* Apartments */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-primaryBg">
          <MdApartment size={70} />
        </h2>
        <p className="text-xl text-white">Apartment</p>
        <p className="text-4xl text-white font-bold">
          <CountUp end={180} duration={3} />
        </p>
      </div>

      {/* Houses & Villas */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-primaryBg">
          <BsFillHousesFill size={70} />
        </h2>
        <p className="text-xl text-white">House & Vila</p>
        <p className="text-4xl text-white font-bold">
          <CountUp end={2580} duration={3} />
        </p>
      </div>

      {/* Pro Agents */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-primaryBg">
          <MdSupportAgent size={70} />
        </h2>
        <p className="text-xl text-white">Pro Agents</p>
        <p className="text-4xl text-white font-bold">
          <CountUp end={280} duration={3} />
        </p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
