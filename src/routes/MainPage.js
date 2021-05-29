/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery';

import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'

import ServiceBlockIcon1 from '../assets/images/icons/services/icon-1.svg'
import ServiceBlockIcon2 from '../assets/images/icons/services/icon-2.svg'
import ServiceBlockIcon3 from '../assets/images/icons/services/icon-3.svg'
import ServiceBlockIcon4 from '../assets/images/icons/services/icon-4.svg'

import ProjectImage1 from '../assets/images/projects/thumbnails/project-1.jpg'
import ProjectImage2 from '../assets/images/projects/thumbnails/project-2.jpg'
import ProjectImage3 from '../assets/images/projects/thumbnails/project-3.jpg'
import ProjectImage4 from '../assets/images/projects/thumbnails/project-4.jpg'

import SectionClients from '../components/sections/SectionClients';
import SectionTeam from '../components/sections/SectionTeam';
import SectionDoubleContact from '../components/sections/SectionDoubleContact';

export default function MainPage() {

    useEffect(() => {
        $(document).ready(function() {
            $('.team-slider').not('.slick-initialized').slick({
                slidesToShow: 6,
                slidesToScroll: 1,

                infinite: true,
                arrows: true,
                swipeToSlide: true,

                prevArrow:'<div className="slider-arrow prev"><div className="icon arrow-left"></div></div>',
                nextArrow:'<div className="slider-arrow next"><div className="icon arrow-right"></div></div>',
            });
        });
    }, []);

    return (
        <main>
            <section className="main-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="main-hero-content">
                                <h1 className="main-hero-title">
                                    LOREM IPSUM
                                </h1>
                                <button className="button">
                                    View all services
                                </button>
                            </div>
                            <div className="main-hero-social">
                                <a href="#">
                                    <div className="icon white behance"></div>
                                </a>
                                <a href="#">
                                    <div className="icon white facebook"></div>
                                </a>
                                <a href="#">
                                    <div className="icon white instagram"></div>
                                </a>
                                <a href="#">
                                    <div className="icon white youtube"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                Services
                            </h2>
                            <div className="blocks-row">
                                <div className="col-3 service-block">
                                    <div className="service-block-title">
                                        <img src={ServiceBlockIcon1} alt=" Architecture planning icon" />
                                        Architecture planning
                                    </div>
                                    <div className="service-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                    </div>
                                    <div className="service-block-more">
                                        <a href="#">
                                            <div>
                                                View more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3 service-block">
                                    <div className="service-block-title">
                                        <img src={ServiceBlockIcon2} alt=" Architecture planning icon" />
                                        Residental interior design
                                    </div>
                                    <div className="service-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                    </div>
                                    <div className="service-block-more">
                                        <a href="#">
                                            <div>
                                                View more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3 service-block">
                                    <div className="service-block-title">
                                        <img src={ServiceBlockIcon3} alt=" Architecture planning icon" />
                                        Commercial design
                                    </div>
                                    <div className="service-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                    </div>
                                    <div className="service-block-more">
                                        <a href="#">
                                            <div>
                                                View more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3 service-block">
                                    <div className="service-block-title">
                                        <img src={ServiceBlockIcon4} alt=" Architecture planning icon" />
                                        Furniture design
                                    </div>
                                    <div className="service-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                    </div>
                                    <div className="service-block-more">
                                        <a href="#">
                                            <div>
                                                View more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                Projects
                            </h2>
                            <div className="blocks-row">
                                <div className="col-6 project-block">
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage2} alt="Globarch Project 2" />
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage3} alt="Globarch Project 3" />
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage4} alt="Globarch Project 4" />
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
                            <div className="section-button">
                                <a href="#">
                                    <button className="button">
                                        View all projects
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionClients />
            <SectionTeam />
            <SectionDoubleContact />
        </main>
    )
}
