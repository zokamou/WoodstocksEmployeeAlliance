"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Typography} from '@mui/material';
//import Carousel from 'react-material-ui-carousel';

const ImageCarousel = ({ title, images }: { title: string[], images: string[] }) => {
  return (
    <Box sx={{ width: "100%", height: "500px", position: "relative", overflow: "hidden" }}>
      {images.map((imagePath, index) => (
        <Box key={index} sx={{ position: "relative", width: "100%", height: "500px" }}>
          <Image
            src={imagePath}
            alt={title[index] ?? "placeholder"}
            fill
            style={{ objectFit: "cover" }}
          />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', fontFamily: 'Creato Bold', marginTop: '15px', textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              {title[index]}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};


export default ImageCarousel;
