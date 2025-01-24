import React from 'react'
import Image from "next/image";
import {BIkeEvolution,foam} from '@/app/assets/images'
import SpaceVideo from "@/app/assets/images/SpaceVideo.png";

export default function foamsession() {
  return (


    <div
    style={{
      backgroundImage: `url(${SpaceVideo.src})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition : "bottom",
      backgroundColor : "black",}}    >


    {/* Bikelight */}
    <div className="bikelight flex lg:flex-row flex-col justify-center items-center ">

  <div className=" justify-center items-center  text-start  text-xl lg:w-1/2">
    <h1 className="font-semibold liner font-poppins text-center   w-450 h-128.21 ">
      World’s first of its  <br/>
      kind Bikelight! 
    </h1> 
  </div>
  <div className="lg:w-1/2">
    <Image
      src={BIkeEvolution}
      alt="Bike Evolution Image"
      className=""
    />
  </div>
</div>


    {/* Foam Section */}
    <div className="flex foam-main lg:flex-row justify-center items-center p-10 lg:gap-20 gap-4 flex-col  lg:p-40">
      <div>
        <Image
          src={foam}
          alt="Foam Image"
          width={400}
          height={300}
          className="rounded-lg "
        />
      </div>   
      <div>
        <div className="blue  p-4 lg:w-[30rem]  rounded-lg">
          <h1 className="text-black font-semibold  font-poppins">Loved the product?</h1>
          <h2 className="text-white font-semibold font-poppins  text-xl mt-1">Get a Free live Demo.</h2>

          <div className="flex  flex-col mt-[1rem]"> 
<input
type="text"
placeholder="Name"
className="rounded-lg p-2 border border-gray-300 focus:outline-none "
/>
<input
type="text"
placeholder="Email"
className="rounded-lg p-2 border mt-2 border-gray-300 focus:outline-none"
/> 
</div>      

          <div className=" ">
          <button className= "py-1 px-10 font-poppins font-semibold bg-black text-color mt-2 rounded-lg">Submit</button>
          </div>
         
        </div>   
      </div>
    </div>
  </div>
  )
}