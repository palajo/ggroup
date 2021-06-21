/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

import VillaKuzmina from '../assets/images/projects/fullsize/villa-kuzmina.jpg'
import SectionContact from '../components/sections/SectionContact'
import OtherProjectsSlider from '../components/sliders/OtherProjectsSlider'
import TeamSlider from '../components/sliders/TeamSlider'

export default function ProjectPage() {
    return (
        <main>
            <section className="project-hero">
                <div className="container-fluid p-0">
                    <div className="project-hero-title">
                        <h1 className="project-hero-title-title">
                            VILLA KUZMINA
                        </h1>
                    </div>
                    <div className="project-hero-background">
                        <img src={VillaKuzmina} alt="Villa Kuzmina Main" />
                    </div>
                </div>
            </section> 
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="project-profile">
                                <tbody>
                                    <tr>
                                        <th>
                                            Design / Architecture
                                        </th>
                                        <td>
                                            Cameron Williamson
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Location
                                        </th>
                                        <td>
                                            Ukraine, Lviv
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Photographer
                                        </th>
                                        <td>
                                            Peter Jackson 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Project budget
                                        </th>
                                        <td>
                                            250k$
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Year
                                        </th>
                                        <td>
                                            2021
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav project-navigation">
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#location" className="nav-link">
                                        Location
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#design" className="nav-link">
                                        Design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#easter-egg" className="nav-link">
                                        Easter Egg
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#team" className="nav-link">
                                        Team
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                About
                            </h2>
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                            <hr />
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 image-height-800">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="location">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                Location
                            </h2>
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 project-gallery-block image-height-350">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-350">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-350">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-400">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-400">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="design">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                Design
                            </h2>
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 image-height-800">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="easter-egg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                Easter Egg
                            </h2>
                            <p className="text-start text-md-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 image-height-800">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={VillaKuzmina} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                Team
                            </h2>
                            <p className="section-description text-start text-md-center d-none d-md-block">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis 
                            </p>
                            <TeamSlider />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section other-projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12 no-padding-mobile">
                            <h2 className="section-title">
                                Other projects
                            </h2>
                            <OtherProjectsSlider />
                            <NavLink to="/projects">
                                <button className="button">
                                    back to all projects
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <SectionContact />
        </main>
    )
}
