import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'


function Socials(){
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/arthur-vardanyan-5346b5233/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100081465957755" target='_blank' rel="noreferrer"><GrFacebook/></a>
            <a href="https://github.com/ArthurVar" target='_blank' rel="noreferrer"><FaGithub/></a>
        </div>
    )
}

export default Socials;