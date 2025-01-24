import Image from 'next/image'
import React from 'react'
import { BIkeEvolutionSimple,MaskGroup,BIkeEvolutions,BIkeEvolution30,Evaultion} from '@/app/assets/images';
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";


export default function imagessession() {
  return (
    <div>

        <div className='maskContainer bg-black flex lg:flex-row flex-col lg:gap-5 '>
            <div className='lg:w-4/6  textContainer lg:p-0 p-10  lg:ml-[8rem] '>

                <h1 className='text-white lg:text-4xl font-poppins lg:mt-[20rem]  lg:ml-2 '>Redefine <strong className='text-color'>Safety</strong> and  <strong className='text-color'>Style</strong> <br/>
                with Spectralite :</h1>
                <div className='text-white'> 
                <div className=''> 

                
             <p className=' mt-2 font-poppins flex gap-2'> <IoMdArrowDropright className='liner mt-1'/> Full-Width Visibility - Drivers see your entire bike.</p>
             <p className='  mt-2  font-poppins flex gap-2'>  <IoMdArrowDropright className='liner mt-1 '/>Ground Laser Safety Zone - Stay safe with a visible perimeter.</p>
             <p className='  mt-2  font-poppins flex gap-2'> <IoMdArrowDropright className='liner mt-1 '/> 360° Lighting – Front, rear, and laser in one system.</p>
               <p className='  mt-2  font-poppins flex gap-2'> <IoMdArrowDropright className='liner mt-1 '/> Sleek Design - Seamlessly integrated, no bulky attachments.</p>
              </div>
                </div>

               
            </div>
            <div className='lg:w-1/2 justify-center items-center text-center'>
                <Image src={MaskGroup} alt='img'/> 
            </div>
           

       
        </div> 
        

 

         {/* one imges */}
         <div className="relative flex justify-center items-center">
  {/* Image Section */}
  <Image src={BIkeEvolutions} alt="Bike Evolution" className="lg:w-full lg:h-full w-[414px] h-[517px]" />

  {/* Card Section */}
  <div className="absolute cardmain justify-end lg:ml-[60rem] mt-[20rem] ml-[5rem] lg:mt-[20rem] bg-black bg-opacity-25 rounded-lg flex-col gap-4 p-5 lg:p-10">
    <div className="max-w-[267px] max-h-[271px]">
      <h2 className="text-white font-poppins mt-2 flex gap-4"> 
        <MdOutlineAccessTime className="liner size-7" /> 8+ hours runtime 
      </h2>
      <h2 className="text-white font-poppins mt-2 flex gap-4">
        <MdOutlinePrivacyTip className="liner size-7" /> Water proof
      </h2>
      <h2 className="text-white font-poppins mt-2 flex gap-4">
        <MdOutlinePrivacyTip className="liner size-7" /> Enhanced safety
      </h2>
      <h2 className="text-white font-poppins mt-2 flex gap-4">
        <IoEyeOutline className="liner size-7" /> Clear Visibility
      </h2>
    </div>
  </div>
</div>

         {/* three imges */}
      <div className='bg-black p-6'>

        <div className='flex lg:flex-row justify-center items-center  gap-5'>
 

           {/* left side image */}
          <div>
            <Image src={BIkeEvolution30} alt='img'/>
          </div>

          <div className='flex-col ' >
          <div className="bg-blue-500   flex justify-center items-center">
      <h1 className="font-poppins text-white text-xl lg:text-3xl">
        SPECTRALITE
      </h1>
    </div>  

           
            <div>
            <Image src={Evaultion} alt='img'/> 
          </div>
          </div>

         

        </div>







      </div>


         

         {/* one imges */}
        <div>
            <Image src={BIkeEvolutionSimple} alt='img'/>
        </div>
    </div>
  )
}
