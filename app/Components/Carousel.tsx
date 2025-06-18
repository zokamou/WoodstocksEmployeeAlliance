"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Typography} from '@mui/material';
//import Carousel from 'react-material-ui-carousel';

const ImageCarousel = ({ title, images }: { title: string[], images: StaticImageData[] }) => {
  
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
        width: "100%",
        height: "500px",
        position: "relative", 
        overflow: "hidden",
      }}
    >
      {/* <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        height="500px" 
      > */}
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "500px",
            }}
          >
            <Image
              src={image}
              alt={title[index] != null ? title[index]:"placeholder"}
              fill
              style={{
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust darkness
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Creato Bold',
                  marginTop:'15px',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                }}
              >
                {title[index]}
              </Typography>
            </Box>
          </Box>
        ))}
      {/* </Carousel> */}
    </Box>
  );
};

export default ImageCarousel;
