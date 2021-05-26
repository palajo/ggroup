import React, { useEffect } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom';

import ProjectImage1 from '../../assets/images/projects/project-1.jpg'
import ProjectImage2 from '../../assets/images/projects/project-2.jpg'
import ProjectImage3 from '../../assets/images/projects/project-3.jpg'
import ProjectImage4 from '../../assets/images/projects/project-4.jpg'


export function ProjectBlock(props) {
    return (
        <div className="project-block">
            <div className="project-image">
                <img src={props.image} />
            </div>
            <div className="project-title-row">
                <div className="project-title-title">
                    <NavLink to="/projects/project">
                        {props.title}
                    </NavLink>
                </div>
                <div className="project-full-view">
                    <NavLink to="/projects/project" className="full-view">
                        <div>
                            Full view
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default function ProjectsOther() {

    useEffect(() => {
        $(document).ready(function() {
            $('.projects-other-slider').not('.slick-initialized').slick({
                slidesToShow: 3,
                slidesToScroll: 1,

                infinite: true,
                arrows: true,
                swipeToSlide: true,

                prevArrow:'<div class="slider-arrow prev"><div class="icon arrow-left"></div></div>',
                nextArrow:'<div class="slider-arrow next"><div class="icon arrow-right"></div></div>',
            });
        });
    }, [])

    return (
        <section className="section projects-other">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2>
                            Also you can view
                        </h2>
                        <div className="projects-other-slider">
                            <ProjectBlock
                                image={ProjectImage1}
                                title="Villa Kuzmina"
                            />
                            <ProjectBlock
                                image={ProjectImage2}
                                title="Villa Kuzmina"
                            />
                            <ProjectBlock
                                image={ProjectImage3}
                                title="Villa Kuzmina"
                            />
                            <ProjectBlock
                                image={ProjectImage4}
                                title="Villa Kuzmina"
                            />
                            <ProjectBlock
                                image={ProjectImage1}
                                title="Villa Kuzmina"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
