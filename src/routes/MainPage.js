/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
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
        $(document, window).ready(function() {
            $('.team-slider').not('.slick-initialized').slick({
                slidesToShow: 6,
                slidesToScroll: 1,

                infinite: true,
                arrows: true,
                swipeToSlide: true,

                prevArrow:'<div className="slider-arrow prev"><div className="icon arrow-left"></div></div>',
                nextArrow:'<div className="slider-arrow next"><div className="icon arrow-right"></div></div>',
            });

            if (window.innerWidth < 768) {
                $('.mainpage-projects-slider').not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
    
                    infinite: true,
                    arrows: false,
                    swipeToSlide: true
                });
            } else {
                if ($('.mainpage-projects-slider').hasClass('slick-initialized')) {
                    $('.mainpage-projects-slider').slick('unslick');
                }
            }

            $(window).resize(function(e){
                if (window.innerWidth < 768) {
                    $('.projects-slider').not('.slick-initialized').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
        
                        infinite: true,
                        arrows: false,
                        swipeToSlide: true
                    });
                } else {
                    if ($('.projects-slider').hasClass('slick-initialized')) {
                        $('.projects-slider').slick('unslick');
                    }
                }
            });
        });
    }, []);

    return (
        <main>
            <section className="main-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
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
                            <h2 className="section-title text-center text-md-start">
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
                            <h2 className="section-title text-center text-md-start">
                                Projects
                            </h2>
                            <div className="blocks-row mainpage-projects-slider">
                                <div className="col-6 project-block">
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage2} alt="Globarch Project 2" />
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage3} alt="Globarch Project 3" />
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
                                <div className="col-6 project-block">
                                    <div className="project-image">
                                        <img src={ProjectImage4} alt="Globarch Project 4" />
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
                            <div className="section-button">
                                <NavLink to="/projects">
                                    <button className="button">
                                        View all projects
                                    </button>
                                </NavLink>
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
