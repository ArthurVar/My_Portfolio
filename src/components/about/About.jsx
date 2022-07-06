import React from "react";
import './about.css'
import foto from './aboutFoto.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About(){
    return(
        <section id="about">
            <h5>Go to know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={foto} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>Junior</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Experience</h5>
                            <small>Junior</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Experience</h5>
                            <small>Junior</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus perspiciatis veritatis at. Itaque suscipit officiis, labore delectus recusandae rerum. Odit non praesentium magni quas iure amet a nihil qui. Dicta?</p>
                    <a href="#contact" className="btn btn-primary">Let`s Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;