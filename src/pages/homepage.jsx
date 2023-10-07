import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/homepage-styles.css"

function HomePage() {
  return (
    <div className="image">
      <div className="animation">
        <TypeAnimation
          sequence={["Elan & nVision", 3500,"IIT HYDERABAD" , 3500]}
          speed={320}
          cursor={false} // omit the default css typing animation class
          className="type"
          repeat={Infinity}
        />
      </div>
      <p className='short-desc'>
      Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.    </p>
    </div>
  );
}

export default HomePage;
