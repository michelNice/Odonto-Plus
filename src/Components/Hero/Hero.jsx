import React from "react";
import './Hero.css'
import img from  '../img/kiddavid.jpg'

const Hero = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">
          Seeing the dentist just <span className="highlight">got cooler</span>
        </h1>
        <p className="description">
          Welcome to Swish Dental, where seeing the dentist is something you
          actually look forward to. We are dedicated to helping you achieve
          your healthiest smile, delivering compassionate dental care and an
          extraordinary dental experience.
        </p>
        <div className="buttons">
          <button className="appointment-button">Book an Appointment</button>
          <button className="studio-button">Find a Studio Near You</button>
        </div>
      </div>
      <div className="image-container">
        <div className="image-frame">
          <img
            src={img} // Replace with your image path
            alt="Dental Studio"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;