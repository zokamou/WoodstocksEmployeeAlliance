"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography } from '@mui/material';
import pizza from '../images/pizza.jpeg';

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar sx={{
      height: "80px",
      boxShadow: 'none',
      backgroundColor: 'white',
      padding: 0, 
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px', 
        '& .MuiTabs-indicator': {
        backgroundColor: 'transparent', 
      },
        
      }}>
        {/* pizza logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:"row"}}>
          <Image src={pizza} alt="Logo" width={50} height={50} />
          <Typography sx={{color:"black", marginLeft: "20px", fontFamily:"Carlito", fontSize:"20px"}}>
            Woodstock's Employee Alliance
          </Typography>
        </Box>

        {/* tabs */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              '& .MuiTabs-flexContainer': {
                transition: 'none',
              },
            }}
          >
            <Tab
              label="Who We Are"
              sx={{
                fontFamily: 'Carlito',
                color: 'black',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'none',
                '&.Mui-selected': {
                  color: '#b82162',
                  fontWeight: 'bold',
                },
              }}
            />

            <Tab
              label="Contact Us"
              sx={{
                fontFamily: 'Carlito',
                color: 'black',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'none',
                '&.Mui-selected': {
                  color: '#b82162',
                  fontWeight: 'bold',
                },
              }}
            />
            <Tab
              label="FAQs"
              sx={{
                fontFamily: 'Carlito',
                color: 'black',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'none',
                '&.Mui-selected': {
                  color: '#b82162',
                  fontWeight: 'bold',
                },
              }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
