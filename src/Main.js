import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="main-section">
    {/* Banner section */}
        
        <section className="banner-section">
        <img
          src="banner.jpeg" 
          className="banner-image"
          />
         </section>

      {/* Login/Sign-Up Section */}
      <section className="auth-section">
        <h1>Welcome to Construction Tracker</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum condimentum, finibus diam ac, imperdiet magna. Ut et placerat justo. 
            Nullam fringilla quam id risus gravida venenatis non nec velit. </p>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This app transformed our project management! Tracking progress has never been easier!"</p>
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