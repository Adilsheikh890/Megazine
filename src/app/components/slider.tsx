"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OneImg, TwoImg, ThreeImg } from "@/app/assets/images";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: OneImg,
      text: {
        title: "First Slide Title",
        subtitle: "Spectralite",
        description: "A patent-protected Handlebar-integrated 3 in 1 Bike-Lights System with Front/Rear lights and a ground laser safety Zone.",
      },
      className: "justify-center",
    },
    {
      image: TwoImg,
      text: {
        title: "Second Slide Title",
        subtitle: "Spectralite!",
        description: "Second Slide Description",
      },
      className: "text-blue-500",
    },
    {
      image: ThreeImg,
      text: {
        title: "Seamless & Innovative design",
        subtitle: "Sleek Integration No Bulky Lights, Just a Seamless Part of Your Bike",
      },
      className: "justify-center lg:mt-[30rem]",
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        {/* Image */}
        <Image
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          layout="responsive"
    
          className="w-full h-auto"
        />
 
        {/* Text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40 text-white p-4 ${slides[currentSlide].className}`}
        >  
          <h2 className="lg:text-lg md:text-4xl font-bold mb-2">
            {slides[currentSlide].text.title}
          </h2>
          <h3 className="lg:text-lg md:text-xl font-semibold mb-2">
            {slides[currentSlide].text.subtitle}
          </h3>
          <p className="text-sm sm:text-base md:text-lg">{slides[currentSlide].text.description}</p>
        </div> 

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
