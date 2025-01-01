"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Resource that we though you may find useful",
      description: "Discover the most breathtaking places to visit this year.Stay ahead with the latest tech trends and innovations.",
      author: "Jane Smith",
      role: "Travel Blogger",
      image:
        "https://img.freepik.com/free-photo/mountain-landscape-nature-wallpaper_53876-140059.jpg",
      profilePic:
        "https://img.freepik.com/free-photo/portrait-young-smiling-woman_171337-18486.jpg",
    },
    {
      title: "Tech Trends in 2024",
      description: "Stay ahead with the latest tech trends and innovations.Stay ahead with the latest tech trends and innovations.",
      author: "Mark Taylor",
      role: "Tech Enthusiast",
      image:
        "https://img.freepik.com/free-photo/high-angle-smartphone-laptop-desk_23-2148723568.jpg",
      profilePic:
        "https://img.freepik.com/free-photo/confident-young-man-casuals-looking-camera_1139-909.jpg",
    },
    {
      title: "Healthy Living Tips",
      description: "Learn how to lead a healthier lifestyle with simple steps.Stay ahead with the latest tech trends and innovations.",
      author: "Sophia Green",
      role: "Health Coach",
      image:
        "https://img.freepik.com/free-photo/healthy-food-clean-eating-selection_79782-661.jpg",
      profilePic:
        "https://img.freepik.com/free-photo/portrait-pretty-woman-smiling_171337-19083.jpg",
    },
    {
      title: "Travel on a Budget",
      description: "Top destinations to visit without breaking the bank.Stay ahead with the latest tech trends and innovations.",
      author: "Liam Brown",
      role: "Budget Traveler",
      image:
        "https://img.freepik.com/free-photo/hand-holding-passport-boarding-pass-blue-background_23-2148688790.jpg",
      profilePic:
        "https://img.freepik.com/free-photo/portrait-young-man-smiling_171337-19084.jpg",
    },
    {
      title: "Mindfulness Practices",
      description: "Simple mindfulness exercises for a better day.Stay ahead with the latest tech trends and innovations.",
      author: "Emily White",
      role: "Wellness Expert",
      image:
        "https://img.freepik.com/free-photo/meditation-practice-young-woman-silhouette-sunrise_23-2148684093.jpg",
      profilePic:
        "https://img.freepik.com/free-photo/young-woman-happy-face_171337-17778.jpg",
    },
  ];

  useEffect(() => {
    const slider = new Glide(".glide-blogs", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 500,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 1,
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
    <div className="container mx-auto">
      <div className="flex flex-col gap-5">
        <p className="text-base text-primaryBg font-semibold">
          Our latest news
        </p>
        <h2 className="text-4xl font-semibold">Recent Blog Posts</h2>
        <div className="flex mt-2">
          <div className="w-10 bg-black h-1"></div>
          <div className="w-10 bg-primaryBg h-1"></div>
        </div>
      </div>
      <div className="mt-8 glide-blogs relative w-full">
  <div className="overflow-hidden" data-glide-el="track">
    <ul className="flex relative w-full overflow-hidden p-0">
      {blogPosts.map((blog, index) =>
        index % 2 === 0 ? (
          <li
            key={index}
            className="flex-shrink-0 w-full flex flex-col gap-5"
          >
            {/* First card */}
            <div className="relative bg-white flex flex-col gap-5 p-4">
              <div className="flex sm:flex-row flex-col gap-4">
                <img
                  src={blog.profilePic}
                  alt={blog.author}
                  className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full"
                />
                <div>
                  <h1 className="text-[1.4rem] font-medium leading-[24px]">
                    {blog.title}
                  </h1>
                  <p className="text-gray-600 mt-3 text-[0.9rem]">
                    {blog.description}
                  </p>
                  <div className="flex mt-3 justify-between">
                    <div className="flex gap-2 items-center ">
                      <p className="text-primaryBg ">
                        <MdOutlineRealEstateAgent />
                      </p>
                      <p className="text-[0.9rem] text-gray-600 ">
                        Alex Angels
                      </p>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <p className="text-primaryBg">
                        <SlCalender />
                      </p>
                      <p className="text-[0.9rem] text-gray-600">
                        25th Dec, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second card */}
            {blogPosts[index + 1] && (
              <div className="relative bg-white flex flex-col gap-5 p-4">
                <div className="flex sm:flex-row flex-col gap-4">
                  <img
                    src={blogPosts[index + 1].profilePic}
                    alt={blogPosts[index + 1].author}
                    className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full"
                  />
                  <div>
                    <h1 className="text-[1.4rem] font-medium leading-[24px]">
                      {blogPosts[index + 1].title}
                    </h1>
                    <p className="text-gray-600 mt-3 text-[0.9rem]">
                      {blogPosts[index + 1].description}
                    </p>
                    <div className="flex mt-3 justify-between">
                      <div className="flex gap-2 items-center ">
                        <p className="text-primaryBg ">
                          <MdOutlineRealEstateAgent />
                        </p>
                        <p className="text-[0.9rem] text-gray-600 ">
                          Alex Angels
                        </p>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <p className="text-primaryBg">
                          <SlCalender />
                        </p>
                        <p className="text-[0.9rem] text-gray-600">
                          25th Dec, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ) : null
      )}
    </ul>
  </div>

  {/* Centered Buttons */}
  <div
    className="absolute flex justify-center w-full mt-6" // Center buttons and add margin-top
    data-glide-el="controls"
  >
    <button
      className="h-8 w-8  rounded-full bg-white border border-primaryBg text-primaryBg"
      data-glide-dir="<"
    >
      &#8249;
    </button>
    <button
      className="h-8 w-8  rounded-full bg-white border border-primaryBg text-primaryBg"
      data-glide-dir=">"
    >
      &#8250;
    </button>
  </div>
</div>

    </div>
  );
};

export default Blogs;
