import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/homepage-styles.css"
import sponsors from "../data/sponsors";
import Pictures from "../components/pictures";
import fest from "../assets/Fest.jpg"
import about from "../assets/about.jpg"

function HomePage() {
  return (
    <>
    <div className="image">
      <div className="animation">
        <TypeAnimation
          sequence={["Elan & ηVision", 3500,"" , 500]}
          speed={320}
          cursor={false} // omit the default css typing animation class
          className="type"
          repeat={Infinity}
        />
      </div>
      <p className='short-desc'>
      Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.    </p>
    </div>

    <div className="about-us">
      <h2 className="heading">About us</h2>
      <img src={fest} height={480} width={480} className="about-img1" alt="" />
      <img src={about} height={480} width={480} className="about-img2" alt="" />
    </div>
    
    <div className="sponsors">
        <h2 className="heading">Our Sponsors</h2>
        <div className="imagesOfSponsors">
          <Pictures details = {sponsors} />
        </div>
    </div>

    </>
  );
}

export default HomePage;
