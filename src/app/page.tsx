import Image from "next/image";
import Slider from "./components/slider";
import {KopieVonOne,KopieVonTwo,BIkeEvolution,foam} from '@/app/assets/images'
import SpaceVideo from "@/app/assets/images/SpaceVideo.png";

export default function Home() {
  return (
    <div>
      <Slider />

      {/* Session Six */}
      <div
        style={{
          backgroundImage: `url(${SpaceVideo.src})`, 
       
        backgroundPosition : "center",
          backgroundColor : "black",
        }}
        className="p-10"
      >
        {/* Bikelight */}
        <div className="bikelight flex lg:flex-row flex-col justify-center items-center w-2/5">
          <div className="w-[450px] h-[128.21px] p-12 bg-black">
            <h1 className="font-semibold liner siz-48">
              World’s first of its <br />
              kind Bikelight!
            </h1>
          </div>
          <div>
            <Image
              src={BIkeEvolution}
              alt="Bike Evolution Image"
              className="w-[1008px] h-[1080px]"
            />
          </div>
        </div>

        {/* Foam Section */}
        <div className="flex foam-main lg:flex-row justify-center items-center lg:gap-20 gap-4 flex-col  lg:p-40">
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
              <h1 className="text-black font-semibold  font-sans ">Loved the product?</h1>
              <h2 className="text-white font-semibold font-sans text-xl mt-1">Get a Free live Demo.</h2>

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
              <button className= "py-1 px-10 font-sans font-semibold bg-black text-color mt-2 rounded-lg">Submit</button>
              </div>
            
            </div> 
          </div>
        </div>
      </div>

      {/* Bottom Images */}
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div>
          <Image src={KopieVonOne} alt="Kopie Von One Image" />
        </div>
        <div>
          <Image src={KopieVonTwo} alt="Kopie Von Two Image" />
        </div>
      </div>
    </div>
  );
}
