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
        title: (
          <>
              World&apos;s First Handlebar- <br />Integrated Bike Light System
          </>
      ),
        subtitle: "Spectralite",
        description:
         "A patent-protected Handlebar-integrated 3 in 1 Bike-Lights System with Front/Rear lights & a ground laser safety Zone. ",
      },
      
    },
    { 
      image: TwoImg,
      text: {
        title: "Revolutionize night cycling with",
        subtitle: "Spectralite!",
        description: "Experience unmatched visibility & safety with Spectralite’s innovative lighting for every night cyclist.",
      },
      
    }, 
    {
      image: ThreeImg,
      text: {
        titleone: "Seamless & Innovative design",
        subtitletwo: "Sleek Integration No Bulky Lights, Just a Seamless Part of Your Bike",
      },
      className: "text-center  justify-center items-center",  
    }, 
  ];

  return ( 
    <div className="relative">
       <div id="contact" className="absolute lg:mt-[3rem] lg:px-5 lg:py-2 py-1 px-4 mt-[1rem] justify-items-end right-2 bg-gray-400 bg-opacity-10 rounded-lg lg:right-8">
    <button className="text-white font-poppins">Contact</button>
</div>

      <div className="overflow-hidden">  
        {/* Image */}
        <Image
           src={slides[currentSlide].image} 
           alt={`Slide ${currentSlide + 1}`}  
          width={1920} 
          height={1080}/> 
          
         

         

  
        {/* Text */}  
        <div 
          className={`absolute inset-0 flex flex-col lg:w-1/2 lg:ml-[4rem] lg:mt-[10rem]  text-white p-4 ${slides[currentSlide]}`}>  
          <h2 className="text-sm lg:mt-0 mt-5 lg:text-4xl font-poppins italic font-bold mb-2">
            {slides[currentSlide].text.title}  
          </h2>

        
          <h1 className="text-sm lg:w-1/2 liner italic font-poppins lg:text-5xl font-semibold mb-2">
            {slides[currentSlide].text.subtitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic">{slides[currentSlide].text.description}</p>
           <div className={`${slides[currentSlide].className}`}> 

           <h1 className=" justify-center lg:mt-[24rem]  lg:text-4xl liner items-center italic">{slides[currentSlide].text.titleone}</h1> 
           <p className=" justify-center items-center  text-center italic">{slides[currentSlide].text.subtitletwo}</p> 
           </div>
          

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
