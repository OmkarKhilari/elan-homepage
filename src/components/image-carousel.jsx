import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import eventscollage1 from "../assets/eventscollage.jpg";
import eventscollage2 from "../assets/eventscollage2.jpg";
import eventscollage3 from "../assets/eventscollage3.jpg";
import eventscollage4 from "../assets/eventscollage4.jpg";
import eventscollage5 from "../assets/eventscollage5.jpg";
import eventscollage6 from "../assets/eventscollage6.jpg";
import "../styles/carousel.css"; 

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
        className="custom-carousel" 
      >
        <div>
          <img src={eventscollage1} alt="Event 1" />
        </div>
        <div>
          <img src={eventscollage2} alt="Event 2" />
        </div>
        <div>
          <img src={eventscollage3} alt="Event 3" />
        </div>
        <div>
          <img src={eventscollage4} alt="Event 4" />
        </div>
        <div>
          <img src={eventscollage5} alt="Event 5" />
        </div>
        <div>
          <img src={eventscollage6} alt="Event 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
