import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'
import {HiDotsHorizontal} from 'react-icons/hi'

function BackendComp(){
    return(
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4><HiDotsHorizontal/></h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4><HiDotsHorizontal/></h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4><HiDotsHorizontal/></h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4><HiDotsHorizontal/></h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <h4><HiDotsHorizontal/></h4>
                            <small className="text-light">Experience</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4><HiDotsHorizontal/></h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
    )
}            

export default BackendComp;