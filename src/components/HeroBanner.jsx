import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box 
        sx = {{
            mt: {lg: '212px', xs: '70px'}, 
            ml: {sm: '50px'}
        }}
        position = "relative"
        p = "20px"
    >
        <Typography 
            color = "#FF2625" 
            fontWeight = "600" 
            fontSize = "25px"
            mb = {3}
        >
            Fitness Club
        </Typography>

        <Typography 
            fontWeight= "700"
            mb = "23px"
            mt = "30px"
            sx = {{
                fontSize: {lg: '44px', xs: '40px'}
            }}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        
        <Typography
            fontSize = "22px" 
            lineHeight= "35px"
            mb = {4}    
        >
            Check out the most effective exercises
        </Typography>

        <Button 
            href = "#exercises"
            variant = "contained" 
            size = "large"
            color = "error"
            sx = {{
                backgroundColor: '#ff2625'
            }}
        >
            Explore Exercises
        </Button>

        <Typography
            fontWeight={600}
            color = "#FF2625"
            fontSize = "200px"
            sx = {{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
        >Exercise</Typography>

        <img src = {HeroBannerImage} alt = "banner" className = "hero-banner-img"></img>
    </Box>
  )
}

export default HeroBanner