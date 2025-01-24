import Image from 'next/image'
import React from 'react'
import { BIkeEvolutionSimple,MaskGroup,BIkeEvolutions,BIkeEvolution30,Evaultion} from '@/app/assets/images';
import { IoMdArrowDropright } from "react-icons/io";

export default function imagessession() {
  return (
    <div>

        <div className='maskContainer bg-black flex lg:flex-row flex-col gap-5 '>
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
         <div className=' justify-center items-center '>
            <Image src={BIkeEvolutions} alt='img'/>

         </div>
         {/* three imges */}
         <div className=' images justify-center items-center space-x-5 space-y-5 bg-black p-5 flex lg:flex-row flex-col'>
           

            
            <div>
                <Image src={BIkeEvolution30} alt='img'/> 
            </div>


       <div className='lg:flex-col  flex flex-row  space-y-4 gap-4  '>
  <div className='blue w-[100px] h-[100px] lg:w-[500px] lg:h-[300px]'>
    <h1 className='font-poppins text-center justify-center items-center lg:text-2xl text-white'>
      Spectralite
    </h1>
  </div>
  <div className=''>
    <Image src={Evaultion} alt='img'  />
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
