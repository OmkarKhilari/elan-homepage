import React from 'react';
import '../styles/footer-styles.css';
import elanlogo from "../assets/elan-logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img src={elanlogo} height={144} alt="" />
        </div>
        <div className="footer-text">

            <h3>Contact Us</h3>
            <ul className='footer-list'>
                <li>
                <span className='elan-text'>Elan & ηVision</span> Web Team
                </li>

                <li>
                    <a href="mailto:elan@iith.ac.in">elan@iith.ac.in</a>
                </li>

                <li>
                    +91 7988XXXXX7
                </li>

                <li>
                    +91 9088XXXXX7
                </li>
            </ul>
        </div>

        <div className="footer-text">
            <h3>Our Sponsors</h3>
        <ul className='footer-list'>
                <li>
                Laursen & Toubro
                </li>

                <li>
                    Arcesium
                </li>

                <li>
                    State Bank of India
                </li>

                <li>
                    Honeywell
                </li>
            </ul>
        </div>

        <div className="footer-text">
            <h3>Follow us</h3>
        <ul className='footer-list'>
                <li>
                    <a href="https://www.instagram.com/elan_nvision.iith/" target='_blank'>Instagram</a>
                </li>

                <li>
                    <a href="https://www.facebook.com/elan.iithyderabad" target='_blank'>Facebook</a>
                </li>

                <li>
                    <a href="https://www.youtube.com/user/ElanIITHyderabad" target='_blank'>YouTube</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/elan-nvision-iith/" target='_blank'>LinkedIn</a>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
