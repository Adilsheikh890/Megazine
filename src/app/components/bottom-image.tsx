import React from 'react'
import Image from "next/image";
import {KopieVonOne,KopieVonTwo} from '@/app/assets/images'

export default function Bottomimage() {
  return (

     <div>
     <div className="flex lg:flex-row flex-col justify-center items-center">
     <div>
       <Image src={KopieVonOne} alt="Kopie Von One Image" />
     </div>
     <div>
       <Image src={KopieVonTwo} alt="Kopie Von Two Image" />
     </div>
   </div>
   </div>
  )
}
