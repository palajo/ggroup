import React, { useEffect } from 'react'
import $ from 'jquery'

import ProjectImage1 from '../../assets/images/projects/thumbnails/project-1.jpg'
import ProjectImage2 from '../../assets/images/projects/thumbnails/project-2.jpg'
import ProjectImage3 from '../../assets/images/projects/thumbnails/project-3.jpg'
import ProjectImage4 from '../../assets/images/projects/thumbnails/project-4.jpg'

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
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage2} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage3} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage4} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage1} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                    <img src={ProjectImage2} alt="Globarch Project 1" />
                </div>
                <div className="project-title">
                    <div className="project-title-title">
                        <a href="#" className="nav-link">
                            Villa Kuzmina
                        </a>
                    </div>
                    <div className="project-title-more">
                        <a href="#">
                            <div>
                                View more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
