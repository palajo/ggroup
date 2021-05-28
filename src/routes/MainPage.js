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

import ClientLogo1 from '../assets/images/clients/client-1.png'
import ClientLogo2 from '../assets/images/clients/client-2.png'
import ClientLogo3 from '../assets/images/clients/client-3.png'
import ClientLogo4 from '../assets/images/clients/client-4.png'
import ClientLogo5 from '../assets/images/clients/client-5.png'
import ClientLogo6 from '../assets/images/clients/client-6.png'
import ClientLogo7 from '../assets/images/clients/client-7.png'
import ClientLogo8 from '../assets/images/clients/client-8.png'
import ClientLogo9 from '../assets/images/clients/client-9.png'
import ClientLogo10 from '../assets/images/clients/client-10.png'
import ClientLogo11 from '../assets/images/clients/client-11.png'
import ClientLogo12 from '../assets/images/clients/client-12.png'
import ClientLogo13 from '../assets/images/clients/client-13.png'
import ClientLogo14 from '../assets/images/clients/client-14.png'
import ClientLogo15 from '../assets/images/clients/client-15.png'
import ClientLogo16 from '../assets/images/clients/client-16.png'
import ClientLogo17 from '../assets/images/clients/client-17.png'
import ClientLogo18 from '../assets/images/clients/client-18.png'
import ClientLogo19 from '../assets/images/clients/client-19.png'
import ClientLogo20 from '../assets/images/clients/client-20.png'
import ClientLogo21 from '../assets/images/clients/client-21.png'

import TeamMember1 from '../assets/images/team/member-1.png'
import TeamMember2 from '../assets/images/team/member-2.png'
import TeamMember3 from '../assets/images/team/member-3.png'
import TeamMember4 from '../assets/images/team/member-4.png'
import TeamMember5 from '../assets/images/team/member-5.png'
import TeamMember6 from '../assets/images/team/member-6.png'

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
                            <div className="services-row">
                                <div className="service-block">
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
                                <div className="service-block">
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
                                <div className="service-block">
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
                                <div className="service-block">
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
                            <div className="projects-row">
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
                                <div className="project-block">
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
                                <div className="project-block">
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
            <section className="section" id="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                Our clients
                            </h2>
                            <div className="clients-row">
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo1} alt="Globarch Client 1" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo2} alt="Globarch Client 2" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo3} alt="Globarch Client 3" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo4} alt="Globarch Client 4" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo5} alt="Globarch Client 5" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo6} alt="Globarch Client 6" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo7} alt="Globarch Client 7" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo8} alt="Globarch Client 8" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo9} alt="Globarch Client 9" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo10} alt="Globarch Client 10" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo11} alt="Globarch Client 11" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo12} alt="Globarch Client 12" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo13} alt="Globarch Client 13" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo14} alt="Globarch Client 14" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo15} alt="Globarch Client 15" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo16} alt="Globarch Client 16" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo17} alt="Globarch Client 17" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo18} alt="Globarch Client 18" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo19} alt="Globarch Client 19" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo20} alt="Globarch Client 20" />
                                    </a>
                                </div>
                                <div className="client-block">
                                    <a href="#">
                                        <img src={ClientLogo21} alt="Globarch Client 21" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                Our team
                            </h2>
                            <div className="team-slider">
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember1} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember2} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember3} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember4} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember5} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember6} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember1} alt="Globarch Team Member 1" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="member-block">
                                    <div className="member-image">
                                        <img src={TeamMember2} alt="Globarch Team Member 6" />
                                    </div>
                                    <div className="member-about">
                                        <div className="member-name">
                                            Pavlova Irina
                                        </div>
                                        <div className="member-position">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs-container">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="false">
                                            I'm interested in project
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="career-tab" data-bs-toggle="tab" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="true">
                                            I'm interested in a career
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane" id="project" role="tabpanel" aria-labelledby="project-tab">
                                        <div className="tab-pane-row">
                                            <div className="tab-pane-col contacts-tab-block">
                                                <h3 className="bold"> 
                                                    Are you interested in career?
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                                </p>
                                                <div className="contacts-phone">
                                                    <a href="#">
                                                        +38 099 98 47 911
                                                        <span>or call</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane-col">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="project-title">Project title</label>
                                                            <input type="text" className="text-input" id="project-title" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="project-description">Project description</label>
                                                            <textarea className="textarea-input" id="project-description" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="file-input">Attachment (up to 10mb)</label>
                                                            <label htmlFor="file-input" className="file-input">
                                                                Upload file
                                                                <input type="file" id="file-input" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="location">Location</label>
                                                            <input type="text" className="text-input" id="location" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" className="text-input" id="name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="company-name">Company name</label>
                                                            <input type="text" className="text-input" id="company-name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="phone">Phone number</label>
                                                            <input type="text" className="text-input phone-input" id="phone" />
                                                        </div>
                                                        <div className="form-block">
                                                            <label htmlFor="email">E-mail</label>
                                                            <input type="email" className="text-input" id="email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <div className="checkbox-input">
                                                                <input type="checkbox" id="checkbox-input" />
                                                                <label htmlFor="checkbox-input">
                                                                    I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="button" type="submit">
                                                        Send message
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane show active" id="career" role="tabpanel" aria-labelledby="career-tab">
                                        <div className="tab-pane-row">
                                            <div className="tab-pane-col contacts-tab-block">
                                                <h3 className="bold"> 
                                                    Are you interested in career?
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                                </p>
                                                <div className="contacts-phone">
                                                    <a href="#">
                                                        +38 099 98 47 911
                                                        <span>or call</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane-col">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="position-2">Position title</label>
                                                            <input type="text" className="text-input" id="position-2" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="about-2">Briefly about you</label>
                                                            <textarea className="textarea-input" id="about-2" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="file-input-2">Attachment (up to 10mb)</label>
                                                            <label htmlFor="file-input-2" className="file-input">
                                                                Upload file
                                                                <input type="file" id="file-input-2" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="location-2">Location</label>
                                                            <input type="text" className="text-input" id="location-2" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="name-2">Name</label>
                                                            <input type="text" className="text-input" id="name-2" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <label htmlFor="phone-2">Phone number</label>
                                                            <input type="text" className="text-input phone-input" id="phone-2" />
                                                        </div>
                                                        <div className="form-block">
                                                            <label htmlFor="email-2">E-mail</label>
                                                            <input type="email" className="text-input" id="email-2" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-block">
                                                            <div className="checkbox-input">
                                                                <input type="checkbox" id="checkbox-input-2" />
                                                                <label htmlFor="checkbox-input-2">
                                                                    I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="button" type="submit">
                                                        Send message
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
