/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery'

import ProjectImage1 from '../assets/images/projects/thumbnails/project-1.jpg'
import ProjectImage2 from '../assets/images/projects/thumbnails/project-2.jpg'
import ProjectImage3 from '../assets/images/projects/thumbnails/project-3.jpg'
import ProjectImage4 from '../assets/images/projects/thumbnails/project-4.jpg'
import ProjectsSlider from '../components/sliders/ProjectsSlider'
import { NavLink } from 'react-router-dom'

export default function ProjectsPage() {

    useEffect(() => {
        $(document).ready(function() {
            $('.dropdown').on('mouseenter',function(){
                $(this).find('.dropdown-menu').fadeIn(200);
            });

            $('.dropdown').on('mouseleave',function(){
                $(this).find('.dropdown-menu').fadeOut(100);
            });
        });
    }, []);

    return (
        <main>
            <section className="projects-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="projects-hero-content">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                </p>
                                <h1 className="projects-hero-title">
                                    <span>
                                        Gallery of realized projects
                                    </span>
                                    Our projects
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filters-row">
                                <div className="filter-block dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        <span>
                                            All
                                        </span>
                                        Architecture
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Furniture design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Commercial design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Residental interior design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Architecture planning
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-block dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        <span>
                                            All
                                        </span>
                                        Architecture
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Furniture design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Commercial design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Residental interior design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Architecture planning
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-block dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        <span>
                                            All
                                        </span>
                                        Architecture
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Furniture design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Commercial design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Residental interior design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Architecture planning
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-block dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        <span>
                                            All
                                        </span>
                                        Architecture
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Furniture design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Commercial design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Residental interior design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                Architecture planning
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-fluid p-0">
                    <div className="projects-block">
                        <div className="projects-image">
                            <img src={ProjectImage1} alt="Villa Kuzmina" />
                        </div>
                        <div className="projects-title">
                            <div className="projects-title-title">
                                <NavLink to="/projects/villa-kuzmina" className="nav-link">
                                    Villa Kuzmina
                                </NavLink>
                                <span>
                                    Location
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="projects-block">
                        <div className="projects-image">
                            <img src={ProjectImage2} alt="Villa Kuzmina" />
                        </div>
                        <div className="projects-title">
                            <div className="projects-title-title">
                                <NavLink to="/projects/villa-kuzmina" className="nav-link">
                                    Villa Kuzmina
                                </NavLink>
                                <span>
                                    Location
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="projects-block">
                        <div className="projects-image">
                            <img src={ProjectImage3} alt="Villa Kuzmina" />
                        </div>
                        <div className="projects-title">
                            <div className="projects-title-title">
                                <NavLink to="/projects/villa-kuzmina" className="nav-link">
                                    Villa Kuzmina
                                </NavLink>
                                <span>
                                    Location
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="projects-block">
                        <div className="projects-image">
                            <img src={ProjectImage4} alt="Villa Kuzmina" />
                        </div>
                        <div className="projects-title">
                            <div className="projects-title-title">
                                <NavLink to="/projects/villa-kuzmina" className="nav-link">
                                    Villa Kuzmina
                                </NavLink>
                                <span>
                                    Location
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title text-center">
                                Also you can view
                            </h2>
                            <ProjectsSlider />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 contact-form">
                            <h3 className="bold">
                                Are you interested in construction with us?
                            </h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                            <form>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label>Name</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-block">
                                        <label>Phone number</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                    <div className="form-block">
                                        <label>E-mail</label>
                                        <input type="email" className="text-input" />
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
                            <div className="contacts-phone">
                                <a href="#">
                                    <span>or call</span>
                                    +38 099 98 47 911
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
