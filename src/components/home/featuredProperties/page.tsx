"use client"
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaHeart, FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";

// Property data
const properties = [
  {
    id: 1,
    title: "Lovelace Road Greenfield",
    location: "Dhaka",
    description: "A beautiful apartment with modern amenities...",
    image: "https://i.ibb.co/QngQYY4/featured-1.jpg",
    price: "$1200",
    saleStatus: "Sale",
    stars: 5,
    details: { beds: 2, baths: 3, cars: 3, area: "1200 square" },
  },
  {
    id: 2,
    title: "Lovelace Road Greenfield",
    location: "Dhaka",
    description: "A beautiful apartment with modern amenities...",
    image: "https://i.ibb.co.com/KKQkVkd/featured-3.jpg",
    price: "$1200",
    saleStatus: "Sale",
    stars: 5,
    details: { beds: 2, baths: 3, cars: 3, area: "1200 square" },
  },
  {
    id: 3,
    title: "Lovelace Road Greenfield",
    location: "Dhaka",
    description: "A beautiful apartment with modern amenities...",
    image: "https://i.ibb.co.com/DW4ZXw3/featured-2.jpg",
    price: "$1200",
    saleStatus: "Sale",
    stars: 5,
    details: { beds: 2, baths: 3, cars: 3, area: "1200 square" },
  },
  {
    id: 4,
    title: "Lovelace Road Greenfield",
    location: "Dhaka",
    description: "A beautiful apartment with modern amenities...",
    image: "https://i.ibb.co.com/KKQkVkd/featured-3.jpg",
    price: "$1200",
    saleStatus: "Sale",
    stars: 5,
    details: { beds: 2, baths: 3, cars: 3, area: "1200 square" },
  },
];

// PropertyCard Component
const PropertyCard = ({ property }) => {
  const { title, location, description, image, price, saleStatus, stars, details } = property;
  return (
    <div className="bg-white overflow-hidden w-full">
      <div className="relative">
        <Image src={image} alt={title} width={350} height={222}   className="w-full h-60 object-cover transform transition duration-700 hover:scale-125"
        />
        <span className="absolute top-0 left-0 rounded-br-2xl bg-opacity-70 bg-primaryBg text-white text-lg font-normal py-2 px-5">{saleStatus}</span>
        <span className="absolute bottom-0 right-0 rounded-tl-2xl bg-opacity-70 bg-black text-white text-lg font-normal py-2 px-5">{price}</span>
        <span className="absolute -bottom-5 left-8 bg-primaryBg hover:bg-black transition-colors duration-500 text-white text-lg font-normal w-[45px] h-[50px] clip-hexagon flex items-center justify-center">
          <FaHeart />
        </span>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
          <div className="flex items-center text-xl mb-2 text-primaryBg">{Array(stars).fill(<IoIosStar />)}</div>
        </div>
        <p className="text-primaryBg font-semibold text-base">{location}</p>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
        <div className="bg-gray-100 mt-6 py-3 px-5 flex justify-between text-gray-600 font-medium">
          <div className="flex gap-5">
            <div className="flex gap-2 items-center"><FaBed /><p className="text-sm">{details.beds}</p></div>
            <div className="flex gap-2 items-center"><FaBath /><p className="text-sm">{details.baths}</p></div>
            <div className="flex gap-2 items-center"><FaCar /><p className="text-sm">{details.cars}</p></div>
          </div>
          <div className="flex gap-2 items-center"><FaRulerCombined /><p className="text-sm">{details.area}</p></div>
        </div>
      </div>
    </div>
  );
};

// FeaturedProperties Component with Glide Carousel Integration
const FeaturedProperties = () => {
  useEffect(() => {
    const slider =  new Glide('.glide-04', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 500,
        animationDuration: 2000,
        gap: 24,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1024: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);


  return (
    <div className="px-6 mx-auto container">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-base text-primaryBg font-semibold">Our Properties For Sale and Rent</p>
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
        <div className="flex">
          <div className="w-10 bg-black h-1"></div>
          <div className="w-10 bg-primaryBg h-1"></div>
        </div>
      </div>
      {/* Glide Carousel */}
      <div className="glide-04 relative w-full mt-16">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0">
            {properties.map((property) => (
              <li key={property.id} className="glide__slide">
                <PropertyCard property={property} />
              </li>
            ))}
          </ul>
        </div>
        {/* Controls */}
        <div className="flex w-full items-center justify-center gap-2 p-4" data-glide-el="controls">
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primaryBg bg-primaryBg hover:bg-white text-white transition duration-300 hover:border-primaryBg hover:text-primaryBg focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <title>prev slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primaryBg bg-white hover:bg-primaryBg text-primaryBg transition duration-300 hover:border-primaryBg hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <title>next slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
