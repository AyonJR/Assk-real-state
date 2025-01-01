import Image from "next/image";
import React from "react";
import { FaHome, FaSearchPlus } from "react-icons/fa";

interface PropertyCategory {
  image: string;
  title: string;
  propertyCount: string;
  gridClasses: string; 
}

const PropertyCategories = () => {
  const categories: PropertyCategory[] = [
    {
      image: "https://i.ibb.co/N1RJhNr/1.jpg",
      title: "Apartment",
      propertyCount: "5 properties",
      gridClasses: "col-span-2 row-span-2", 
    },
    {
      image: "https://i.ibb.co/M2Ty8sX/2.jpg",
      title: "House",
      propertyCount: "3 properties",
      gridClasses: "col-span-1 row-start-1 col-start-3",
    },
    {
      image: "https://i.ibb.co/s26d4JB/3-1.jpg",
      title: "Villa",
      propertyCount: "2 properties",
      gridClasses: "col-span-1 row-start-1 col-start-4",
    },
    {
      image: "https://i.ibb.co/JssxXRW/4.jpg",
      title: "Studio",
      propertyCount: "4 properties",
      gridClasses: "col-span-2 row-start-2 col-start-3",
    },
    {
      image: "https://i.ibb.co/pvHBHvc/5.jpg",
      title: "Penthouse",
      propertyCount: "1 property",
      gridClasses: "col-span-1 row-span-2 col-start-5",
    },
  ];

  return (
    <div>
      {/* Headings */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-base text-primaryBg font-semibold">
          Check the properties in our directory
        </p>
        <h2 className="text-4xl font-semibold">Property Categories</h2>
        <div className="flex">
          <div className="w-10 bg-black h-1"></div>
          <div className="w-10 bg-primaryBg h-1"></div>
        </div>
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-5 grid-rows-2 gap-2 mt-16">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative group ${category.gridClasses}`}
          >
            <Image
              src={category.image}
              alt={category.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="flex items-center gap-5">
                <p className="hover:text-primaryBg transition-colors duration-500 text-white">
                  <FaHome size={22} />
                </p>
                <div className="border-l border-white">
                  <p className="ml-5 hover:text-primaryBg transition-colors duration-500 text-white">
                    <FaSearchPlus size={22} />
                  </p>
                </div>
              </div>
              <span className="text-white hover:text-primaryBg transition-colors duration-500 text-3xl font-semibold">
                {category.title}
              </span>
              <span className="text-white text-base">
                {category.propertyCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCategories;
