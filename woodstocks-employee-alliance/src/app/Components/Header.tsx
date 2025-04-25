"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography } from '@mui/material';
import pizza from '../images/pizza.jpeg';
import { useRouter } from 'next/navigation'; 



const Header = () => {
  const [value, setValue] = useState(0);
  const router = useRouter(); 



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push('/'); 
    } else if (newValue === 1) {
      router.push('/who-we-are');
    } else if (newValue === 2) {
      router.push('/contact-us');
    } else if (newValue === 3) {
      router.push('/faqs');
    }
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
          <Typography sx={{color:"black", marginLeft: "26px", fontSize:"28px", fontFamily:'Bebas', fontWeight:'bold'}}>
            WOODSTOCKS EMPLOYEE ALLIANCE
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
              label="Home"
              className='tab-style'
              sx={{
                textTransform: 'none',
                fontFamily: 'Creato',
                fontSize: '18px'
              }}
            />
            <Tab
              label="Who We Are"
              className='tab-style'
              sx={{
                textTransform: 'none',
                fontFamily: 'Creato',
                fontSize: '18px'
              }}
            />

            <Tab
              label="Contact Us"
              className='tab-style'
              sx={{
                textTransform: 'none',
                fontFamily: 'Creato',
                fontSize: '18px'
              }}
            />
            <Tab
              label="FAQs"
              className='tab-style'
              sx={{
                textTransform: 'none',
                fontFamily: 'Creato',
                fontSize: '18px'
              }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
