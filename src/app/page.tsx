
import Slider from "./components/slider";
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
