import React from "react";
import './header.css'
import CVA from "./CvLink";
import ME from './comp/me.png'
import Socials from "./SocialsLink";

function Header(){
    return(
        <header>
            <div className='container header__container'>
                <h5>Hello i'm</h5>
                <h1>Artur</h1>
                <h5 className="text-light">Home</h5>
                <CVA/>
  
                <div className="mefoto">
                    <img src={ME} alt='me'/>
                </div>
                <Socials/>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;