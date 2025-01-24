import Image from "next/image";
import Slider from "./components/slider";
import {KopieVonOne,KopieVonTwo,BIkeEvolution,foam} from '@/app/assets/images'
import SpaceVideo from "@/app/assets/images/SpaceVideo.png";
import Bottomimage from "./components/bottom-image";
import FoamSession from "./components/foam-session";
import ImageSession from "./components/images-session";

export default function Home() {
  return (
    <div>
      <Slider />




 {/* images session */}
 <ImageSession/>

 
      {/* Session Six */}
      <FoamSession/>  


      {/* Bottom Images */}
      <Bottomimage/>
      
    </div>
  );
}
