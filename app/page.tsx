import ImageCarousel from "./Components/Carousel";
import {Box, Typography} from '@mui/material';

// images 

export default function Home() {
  const images = [
    "/images/IMG_3025.jpeg",
    "/images/IMG_3027.jpeg",
    "/images/IMG_3028.jpeg",
    "/images/IMG_3029.jpeg",
    "/images/IMG_3030.jpeg",
    "/images/IMG_3031.jpeg"
  ];

  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
      <ImageCarousel title={["Woodstock's Employee Alliance", "Join the Union!", "Ronan Sucks"]} images={images}/>
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


