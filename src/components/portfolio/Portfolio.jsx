import React from 'react'
import foto1 from './portfolioImage/Image.jpg'
import './portfolio.css'

function Portfolio () {

    const data = [
        {
            id:1,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        },
        {
            id:2,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        },
        {
            id:3,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        },
        {
            id:4,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        },
        {
            id:5,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        },
        {
            id:6,
            image:foto1,
            title:'My Project',
            github:'https://github.com/ArthurVar',
            demo:''
        }
    ]
    return(
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {data.map(({id, image, title, github, demo})=>{
                    return(
                        <article key={id} className="portfolio__item">
                             <div className="portfolio__item-image">
                                   <img src={image} alt="Portfolio Image"/>
                             </div>
                             <h3>{title}</h3>
                             <div className="portfolio__item-cta">
                                 <a href={github} className="btn" target='_blank'>Github</a>
                                 <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                             </div>
                        </article>
                    )
                })}

               
            </div>
        </section>
    )
}

export default Portfolio;