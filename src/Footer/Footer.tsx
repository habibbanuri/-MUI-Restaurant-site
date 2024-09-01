import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RestaurantIcon from '@mui/icons-material/Restaurant';


const Footer: React.FC = () => {

  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4 }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="div">
        <RestaurantIcon sx={{color: '#FFD700',fontSize:40,ml:20}}/>
          </Typography>
        </Grid>

        {/* Second Section: Social Icons */}
        <Grid item xs={12} md={4} textAlign="center">
          <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
        </Grid>


        {/* Third Section: Menu Links */}
        <Grid sx={{display:"flex",justifyContent:'center',alignItems:'center',gap:'20px'}} item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Link href="/" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
            About
          </Link>
          <Link href="/menu" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
            Menu
          </Link>
          <Link href="/contact" color="inherit" underline="none" sx={{ display: "block" , mb: 1}}>
            Contact Us
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
