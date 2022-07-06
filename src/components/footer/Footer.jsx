import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

function Footer(){
    return(
        <footer>
            <a href="#" className="footer__logo">Artur Vardanyan</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#porfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100081465957755"><FaFacebookF/></a>
                <a href=""><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/arthur-vardanyan-5346b5233/"><AiOutlineLinkedin/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;