/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import SectionContact from '../components/sections/SectionContact';

import ProjectImage1 from '../assets/images/projects/thumbnails/project-1.jpg';
import ProjectImage2 from '../assets/images/projects/thumbnails/project-2.jpg';

import ArchitechureBackground from '../assets/images/architecture-planning/hero-background.png';
import ArchitectureImage1 from '../assets/images/architecture-planning/image-1.jpg';
import ArchitectureImage2 from '../assets/images/architecture-planning/image-2.jpg';
import ArchitectureImage3 from '../assets/images/architecture-planning/image-3.jpg';
import ArchitectureImage4 from '../assets/images/architecture-planning/image-4.jpg';
import ArchitectureImage5 from '../assets/images/architecture-planning/image-5.jpg';

export default function ArchitecturePlanningPage() {

    useEffect(() => {
        function mainpageProjectsSlider() {
            if ($(window).width() < 768) {
                $('.mainpage-projects-slider').not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    swipeToSlide: true,
                    mobileFirst: true,
                });
            } else if ($(window).width() > 768) {
                $('.mainpage-projects-slider.slick-initialized').slick('unslick');
            }
        }

        $(document).ready(function() {
            mainpageProjectsSlider();
        });

        $(window).on('resize', function(){
            mainpageProjectsSlider();
       });
    }, []);

    return (
        <main>
            <section className="architechure-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="section-title text-center text-md-start">
                                Architecture planning
                            </h1>
                            <p className="section-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="architechure-hero-background">
                    <img src={ArchitechureBackground} />
                </div>
            </section>
            <section className="section double-padding gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title text-center">
                                Our architecture advantages
                            </h2>
                            <ul className="benefits-list mt-100px">
                                <li>
                                   Town-planning conditions and restrictions of the land plot
                                </li>
                                <li>
                                    Opographic and geodetic survey of the land plot M 1: 500
                                </li>
                                <li>
                                    Title documents for the land plot
                                </li>
                                <li>
                                    Scheme of the general plan with the put red lines of building
                                </li>
                                <li>
                                    Design tasks
                                </li>
                                <li>
                                    Engineering and geological surveys
                                </li>
                                <li>
                                    Initial data for design
                                </li>
                                <li>
                                    The term of architectural design depends on the category of complexity and stages of design of the object
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section architecture-blocks-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-title text-center">
                                Description of the architectural design process
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 architecture-block">
                            <div className="row">
                                <div className="col-md-6 architecture-block-content">
                                    <div className="architecture-block-number">
                                        1
                                    </div>
                                    <div className="architecture-block-text">
                                        <h4>
                                            Pre-design works
                                        </h4>
                                        <p>
                                            At this stage of architectural design the external dimensions and volume of the house are determined, the rational placement of the object on the land plot is performed, the appearance and style of the building are formed, facades with connection of spatial planning decisions of internal premises and basic technical and economic indicators are formed. Computer 3D visualization in the architectural design of the object helps the Customer in making a decision.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 architecture-block-image">
                                    <img src={ArchitectureImage1} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 architecture-block reverse">
                            <div className="row">
                                <div className="col-md-6 architecture-block-content">
                                    <div className="architecture-block-number">
                                        2
                                    </div>
                                    <div className="architecture-block-text">
                                        <h4>
                                            Sketch Project
                                        </h4>
                                        <p>
                                            At this stage of architectural design, the main spatial planning and architectural solutions are developed in more detail. The floor plans indicate the main rooms, the sections of the building are made with the indication of height marks.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 architecture-block-image">
                                    <img src={ArchitectureImage2} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 architecture-block">
                            <div className="row">
                                <div className="col-md-6 architecture-block-content">
                                    <div className="architecture-block-number">
                                        3
                                    </div>
                                    <div className="architecture-block-text">
                                        <h4>
                                            Project
                                        </h4>
                                        <p>
                                            Architectural design costThis stage of architectural design is affirmative, on the basis of which the Customer receives a building permit. This section of the project documentation develops the final spatial planning, architectural and construction, design, engineering and technological solutions in the composition and volume sufficient to justify the design decisions, determine the scope of major construction works, equipment needs, building materials and structures, provisions on the organization
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 architecture-block-image">
                                    <img src={ArchitectureImage3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 architecture-block reverse">
                            <div className="row">
                                <div className="col-md-6 architecture-block-content">
                                    <div className="architecture-block-number">
                                        4
                                    </div>
                                    <div className="architecture-block-text">
                                        <h4>
                                            Working project
                                        </h4>
                                        <p>
                                            At this stage of architectural design is the development of design documentation to the extent necessary for construction and installation work. Architectural design in the scope of the stage "Working design" is developed for technically simple construction projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 architecture-block-image">
                                    <img src={ArchitectureImage4} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 architecture-block">
                            <div className="row">
                                <div className="col-md-6 architecture-block-content">
                                    <div className="architecture-block-number">
                                        5
                                    </div>
                                    <div className="architecture-block-text">
                                        <h4>
                                            Working documentation
                                        </h4>
                                        <p>
                                            At this stage of architectural design are working drawings, building structures and engineering networks designed for construction and installation work, with a detailed indication on the drawings of the exact geometric parameters and characteristics of structures and elements of the building.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 architecture-block-image">
                                    <img src={ArchitectureImage5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionContact />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 no-padding-mobile">
                            <h2 className="section-title text-center">
                                Our architecture projects
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
            <SectionContact />
        </main>
    )
}
