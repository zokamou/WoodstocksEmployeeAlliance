"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ImageCarousel = ({ title, images }: { title: string, images: StaticImageData[] }) => {
  
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
        width: "100%",
        height: "600px",
        position: "relative", 
        overflow: "hidden",
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        height="600px" 
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "600px",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
