import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/homepage-styles.css";
import sponsors from "../data/sponsors";
import Pictures from "../components/pictures";
import fest from "../assets/Fest.jpg";
import about from "../assets/about.jpg";
import ImageCarousel from "../components/image-carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  return (
    <>
      <div className="image">
        <div className="animation">
          <TypeAnimation
            sequence={["elan & ηvision", 3500, "", 500]}
            speed={320}
            cursor={false}
            className="type"
            repeat={Infinity}
          />
        </div>
        <p className="short-desc">
          Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad and
          is one of the largest fests in South India. It is entirely organized
          by IITH students.{" "}
        </p>
      </div>
      <h1 className="heading" data-aos="fade-in" data-aos-delay="120">About us</h1>
      <div className="about-us" data-aos="fade-in" data-aos-delay="120">
        <p>Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. Elan refers to the cultural part and ηVision cites the technological part of fest. This fest boasts of several professional and semi-professional crowd pulling events and promises to be a grand event that exhibits the best of cultural performances, technical solutions, and advances from the student community.</p>
        <img
          src={fest}
          height={600}
          width={600}
          className="about-img1"
          alt="" 
        />
      </div>
      <div className="about-us">
        <img
          src={about}
          height={600}
          width={600}
          className="about-img2"
          alt=""
        />
        <p>This fest is held in the campus of IIT Hyderabad and is completely organised by the students. Students of IITH amalgamate into a team and put all their efforts into organising this fest. Each domain of this organisation has its own motive and all of them collectively organise this fantabulous fest.</p>
      </div>

      <div className="events">
      <h1 className="heading" data-aos="fade-in" data-aos-delay="120">Our Events</h1>
      <div className="carousel" data-aos="fade-in">
        <ImageCarousel/>
      </div>
      </div>

      <div className="sponsors" data-aos="fade-in" data-aos-delay="120">
        <h1 className="heading" data-aos="fade-in" data-aos-delay="120">Our Sponsors</h1>
        <div className="imagesOfSponsors" data-aos="fade-in" data-aos-delay="120">
          <Pictures details={sponsors} />
        </div>
      </div>
    </>
  );
}

AOS.init();

export default HomePage;
