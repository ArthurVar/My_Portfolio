import React from "react";
import './experience.css'
import BackendComp from "./comp/BackendComp";
import FrontComp from './comp/FrontComp'

function Experience(){
    return(
        <section id="experience">
            <h5> The Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <FrontComp/>
                <BackendComp/>
            </div>
        </section>
    )
}

export default Experience;