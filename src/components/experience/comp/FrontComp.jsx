import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'

function FrontComp(){
    return(
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>REACT</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>REDUX</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
    )
}            

export default FrontComp;