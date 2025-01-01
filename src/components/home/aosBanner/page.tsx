"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, 
      once: true, // Whether animation should happen only once
    });
  }, []);

  return null;
};

export default AOSBanner;
