import Image from "next/image";
import styles from "./page.module.css";
import Typography from '@mui/material/Typography';
import ImageCarousel from "./Components/Carousel";
import Header from "./Components/Header";

// images 
import image1 from './images/IMG_3025.jpeg'
import image2 from './images/IMG_3027.jpeg'
import image3 from './images/IMG_3028.jpeg'
import image4 from './images/IMG_3029.jpeg'
import image5 from './images/IMG_3030.jpeg'
import image6 from './images/IMG_3031.jpeg'
export default function Home() {
  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
      <div style={{marginTop:"80px"}}>
        <Header/>
      </div>
      <ImageCarousel title="images" images={[image1, image2, image3, image4, image5, image6]}/>
    </div>
  );
}
