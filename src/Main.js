import React from 'react';
import './Main.css';
import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "./components/header"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <main className="main-section">
    {/* Banner section */}
    
        <section className="banner-section">
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignment="center"
            boxShadow=" 3px 1px 8px rgba(0, 0, 0.2, 0.2)"
            padding="0 0 0 5px"
            margin="0 0 20px 0"
            height="100px"
            width="469px"
            borderRadius= "20px 20px 20px 20px"
            >
              <Header subtitle="SAWCORP"/>
              <Box
              color="white"
              backgroundColor="#007bff"
              padding="10px"
              margin="0 0 0 5px"
              borderRadius= "0 20px 20px 50px"
            >
              <Header title="Cons-Track" />
              </Box>
          </Box>
          <Box
            display="flex"
             flexDirection="row"
          >
            <Box className="presentation-section"
            margin="10px"
            >
              <h2 className="presentation">REVOLUTIONING YOUR MONITORING</h2>
              <div className="presentation-bold">
                <p>New way to track and monitor your data specialy design for ROADS Construction </p>
                <span>- RoadWorks Inc.</span>
              </div>
              <div className="presentation-bold">
                <p>"A must-have for every construction company. It saved us hours of paperwork!"</p>
                <span>- BuildRight Solutions</span>
              </div>
              <div className="presentation-button">
                <button className="presentation-button1">Order Now</button>
                <button className="presentation-button2">Explore More</button>
                
              </div>
            </Box>
              <Box
              display="flex"
              flexDirection="column"
              
            >
            <img
            src="banner.jpeg" 
            className="banner-image"
            />
            <img
            src="banner.jpeg" 
            className="banner-image"
            />
              </Box>
               
          </Box>
        </Box>
         </section>

      {/* Login/Sign-Up Section */}
      <section className="auth-section">
        <h1>Welcome to Construction Tracker</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum condimentum, finibus diam ac, imperdiet magna. Ut et placerat justo. 
            Nullam fringilla quam id risus gravida venenatis non nec velit. </p>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/supp1App/supp1App">Test</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This kkkkookokokokkkkkkkkkkkkkkkapp transformed our project management! Tracking progress has never been easier!"</p>
          <span>- RoadWorks Inc.</span>
        </div>
        <div className="testimonial">
          <p>"A must-have for every construction company. It saved us hours of paperwork!"</p>
          <span>- BuildRight Solutions</span>
        </div>
      </section>
    </main>
  );
}

export default Main;