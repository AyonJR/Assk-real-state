"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full h-[60px] bg-white shadow-md"
          : "relative h-[80px] bg-white"
      } transition-all duration-500 ease-in-out z-50`}
    >
      <div className="container mx-auto h-full text-black">
        <nav className="flex items-center h-full">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/f4KcgpB/ogg.png"
              alt="Logo"
              width={isScrolled ? 80 : 100}
              height={isScrolled ? 80 : 100}
              className="object-contain"
            />
          </div>

          {/* Right side - Navigation links */}
          <ul className="ml-auto flex gap-4 text-sm font-medium uppercase h-full">
            {[
              "Home",
              "About Us",
              "Our Projects",
              "Gallery",
              "News & Events",
              "Landowners",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className={`${
                  item === "Home"
                    ? "bg-primaryBg border-b-4 border-black text-white"
                    : "hover:bg-primaryBg hover:border-b-4 hover:border-black hover:text-white"
                } cursor-pointer transition duration-700 px-4 flex items-center h-full`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
