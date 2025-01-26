import React from 'react'
import { BikeEvolutionLog , facebook, instagram, youtube } from '../../assets/images';
import Image from 'next/image';
import Link from 'next/link';

export default function footer() {
  return (
    <div className='footer-main justify-center items-center'> 
      <div className=' justify-between footer-conatiner flex flex-row  p-4 items-center'>
        <div>
          <Image src={BikeEvolutionLog} alt="Bike Evolution Logo" className='w-176px h-36px justify-center items-center  lg:ml-[35rem]' />
        </div> 
 
        {/* social icon */}
        <div className='flex flex-row lg:space-x-8 lg:gap-2 gap-4 lg:mt-0 mt-2'> 

        <h1 className=" w-50 h-19 joinus font-poppins hidden lg:block">Join Us</h1>

          <Link 
            href="https://www.facebook.com"  target="_blank">
          <Image src={facebook} alt="facebook" className='w-24px h-24px' /></Link>
         
         <Link href="https://www.youtube.com/" target='blank'><Image src={instagram} alt="instagram" className='w-24px h-24px'  /></Link>
          
          <Link href="https://www.instagram.com/" target='blank'>
          
          <Image src={youtube} alt="youtube" className='w-24px h-24px'   /> </Link>
          
        </div>
      </div>   

             



    </div> 
  )   
}
