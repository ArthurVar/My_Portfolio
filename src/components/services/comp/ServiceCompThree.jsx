import React from "react";
import {BiCheck} from 'react-icons/bi'


function ServiceCompThree(){
    return(
        <article className="service">
                    <div className="service__head">
                        <h3>Cyber Security</h3>
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

export default ServiceCompThree;