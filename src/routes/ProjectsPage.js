/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react'
import $ from 'jquery'

import VillaKuzmina from '../assets/images/projects/big/project-1.jpg'
import ProjectContact from '../components/project/ProjectContact';
import ProjectsOther from '../components/projects/ProjectsOther';

export default function ProjectsPage() {

    useEffect(() => {
        $(document).ready(function() {
            $('ul.filters-nav > li.filters-nav-item.has-child').mouseenter(function() {
                $(this).find('ul.filters-nav-submenu').stop().fadeIn(200);
            });

            $('ul.filters-nav > li.filters-nav-item.has-child').mouseleave(function() {
                $(this).find('ul.filters-nav-submenu').stop().fadeOut(100);
            });
        });
    }, []);

    return (
        <main>
            <section className="section projects-main">
                <div className="container">
                    <div className="row">
                        <div className="page-title">
                            <p className="description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                            <div className="subtitle">Gallery of realized projects</div>
                            <h1 className="title">
                                Our projects
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section projects-filters">
                <div className="container">
                    <div className="row">
                        <ul className="filters-nav">
                            <li className="filters-nav-item has-child">
                                <a href="#" className="filters-nav-link">
                                    <span>
                                        All
                                    </span>
                                    Architecture planning
                                </a>
                                <ul className="filters-nav-submenu">
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Furniture design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Commercial design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Residental interior design
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="filters-nav-item has-child">
                                <a href="#" className="filters-nav-link">
                                    <span>
                                        All
                                    </span>
                                    Architecture planning
                                </a>
                                <ul className="filters-nav-submenu">
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Furniture design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Commercial design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Residental interior design
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="filters-nav-item has-child">
                                <a href="#" className="filters-nav-link">
                                    <span>
                                        All
                                    </span>
                                    Architecture planning
                                </a>
                                <ul className="filters-nav-submenu">
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Furniture design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Commercial design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Residental interior design
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="filters-nav-item has-child">
                                <a href="#" className="filters-nav-link">
                                    <span>
                                        All
                                    </span>
                                    Architecture planning
                                </a>
                                <ul className="filters-nav-submenu">
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Furniture design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Commercial design
                                        </a>
                                    </li>
                                    <li className="filters-nav-submenu-item">
                                        <a href="#" className="filters-nav-submenu-link">
                                            Residental interior design
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section> 
            <section className="section projects-list">
                <div className="projects-list-block">
                    <div className="projects-list-image">
                        <img src={VillaKuzmina} alt="Villa Kuzmina" />
                    </div>
                    <div className="projects-list-title">
                        <div>
                            <div className="projects-list-title-title">
                                Villa Kuzmina
                            </div>
                            <div className="projects-list-title-subtitle">
                                Location
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-list-block">
                    <div className="projects-list-image">
                        <img src={VillaKuzmina} alt="Villa Kuzmina" />
                    </div>
                    <div className="projects-list-title">
                        <div>
                            <div className="projects-list-title-title">
                                Villa Kuzmina
                            </div>
                            <div className="projects-list-title-subtitle">
                                Location
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-list-block">
                    <div className="projects-list-image">
                        <img src={VillaKuzmina} alt="Villa Kuzmina" />
                    </div>
                    <div className="projects-list-title">
                        <div>
                            <div className="projects-list-title-title">
                                Villa Kuzmina
                            </div>
                            <div className="projects-list-title-subtitle">
                                Location
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-list-block">
                    <div className="projects-list-image">
                        <img src={VillaKuzmina} alt="Villa Kuzmina" />
                    </div>
                    <div className="projects-list-title">
                        <div>
                            <div className="projects-list-title-title">
                                Villa Kuzmina
                            </div>
                            <div className="projects-list-title-subtitle">
                                Location
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsOther />
            <ProjectContact />
        </main>
    )
}
