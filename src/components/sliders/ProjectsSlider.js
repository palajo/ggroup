import React, { useEffect } from 'react'
import $ from 'jquery'

import ProjectImage1 from '../../assets/images/projects/thumbnails/project-1.jpg'
import ProjectImage2 from '../../assets/images/projects/thumbnails/project-2.jpg'
import ProjectImage3 from '../../assets/images/projects/thumbnails/project-3.jpg'
import ProjectImage4 from '../../assets/images/projects/thumbnails/project-4.jpg'
import { NavLink } from 'react-router-dom'

export default function ProjectsSlider() {

    useEffect(() => {
        $(document).ready(function() {
            $('.projects-slider').not('.slick-initialized').slick({
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
        <div className="slider projects-slider">
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage1} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                        <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage2} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                        <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage3} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                    <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage4} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                        <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage1} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                        <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage2} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <NavLink to="/projects/villa-kuzmina" className="nav-link">
                            Villa Kuzmina
                        </NavLink>
                    </div>
                    <div className="project-title-more">
                        <NavLink to="/projects/villa-kuzmina">
                            <div>
                                View more
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}
