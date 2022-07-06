import React from "react";
import {BiCheck} from 'react-icons/bi'


function ServiceCompOne(){
    return(
        <article className="service">
                    <div className="service__head">
                        <h3>Game Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
        </article>
    )
}

export default ServiceCompOne;