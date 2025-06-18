import ImageCarousel from "./Components/Carousel";
import {Box, Typography} from '@mui/material';

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
      <ImageCarousel title={["Woodstock's Employee Alliance", "Join the Union!", "Ronan Sucks"]} images={[image1, image2, image3, image4, image5, image6]}/>
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"100px"}}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Creato', fontWeight:'bold', fontSize: "32px"}}>
              What is a Union?
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Creato', fontSize: "22px", color: "darkgray"}}>
              bunch of union text 
            </Typography>
          </Box>
        </Box>
      
    </div>
  );
}
