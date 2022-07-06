import React from "react";
import './testimonials.css'
import avfoto1 from './comp/avfoto1.jpg'
import avfoto2 from './comp/avfoto2.jpg'
import avfoto3 from './comp/avfoto3.jpg'
import avfoto4 from './comp/avfoto4.jpg'
import avfoto5 from './comp/avfoto5.jpg'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'


function Testimonial(){

    const clients = [
        {
            id:1,
            avfoto:avfoto1,
            review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, esse?',
            name:'Poghos Poghosyan'
        },
        {
            id:2,
            avfoto:avfoto2,
            review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, esse?',
            name:'Poghos Poghosyan'
        },
        {
            id:3,
            avfoto:avfoto3,
            review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, esse?',
            name:'Poghos Poghosyan'
        },
        {
            id:4,
            avfoto:avfoto4,
            review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, esse?',
            name:'Poghos Poghosyan'
        },
        {
            id:5,
            avfoto:avfoto5,
            review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, esse?',
            name:'Poghos Poghosyan'
        },

    ]
    return(
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>

            <Swiper className="container testimonials__container"
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1} 
                    pagination={{ clickable: true }}
                    >
                {
                  clients.map(({id, avfoto,review,name})=>{
                     return (
                         <SwiperSlide key={id} className="testimonial">
                              <div className="client__avatar">
                                  <img src={avfoto} alt="AV foto"/>
                              </div>
                              <h5 className="client__name">{name}</h5>
                              <small className="client__review">{review}</small>  
                         </SwiperSlide>
                    )
                  })
                }
            </Swiper>
        </section>
    )
}

export default Testimonial;