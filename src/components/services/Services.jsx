import React from "react";
import ServiceCompOne from "./comp/ServiceCompOne";
import ServiceCompThree from "./comp/ServiceCompThree";
import ServiceCompTwo from "./comp/ServiceCompTwo";
import './services.css'

function Services(){
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <ServiceCompOne/>
                <ServiceCompTwo/>
                <ServiceCompThree/>
            </div>
        </section>
    )
}

export default Services;