import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[120px] bg-white mx-auto  container text-black">
      <nav className=" flex items-center  h-full  ">
        {/* Left side - Logo */}
        <div className="flex items-center ">
          <Image
            src="https://i.ibb.co/f4KcgpB/ogg.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Right side - Navigation links */}
        <ul className="ml-auto flex gap-4 text-sm font-medium uppercase h-full">
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            Home
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            About Us
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            Our Projects
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            Gallery
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            News & Events
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            Landowners
          </li>
          <li className="hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white cursor-pointer transition duration-300 px-4  flex items-center h-full">
            Contact Us
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
