/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

import VillaKuzmina from '../assets/images/projects/big/project-1.jpg'

export default function ProjectPage() {
    return (
        <main>
            <section className="section hero-project">
                <h1 className="project-title">
                    Villa Kuzmina    
                </h1>      
                <div className="project-image">
                    <img src={VillaKuzmina} />
                </div>          
            </section>
            <section className="section section-profile">
                <div className="container">
                    <div className="row">
                        <div className="container-body">
                            <table className="profile-file">
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
                                            Style
                                        </th>
                                        <td>
                                            Modern
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Location
                                        </th>
                                        <td>
                                            Brooklyn Simmons
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Photographer
                                        </th>
                                        <td>
                                            Guy Hawkins
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
            <section className="section project-navigation">
                <div className="container">
                    <div className="row">
                        <ul className="project-nav">
                            <li className="project-nav-item">
                                <Link to="#about" className="project-nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="project-nav-item">
                                <Link to="#location" className="project-nav-link">
                                    Location
                                </Link>
                            </li>
                            <li className="project-nav-item">
                                <Link to="#design" className="project-nav-link">
                                    Design
                                </Link>
                            </li>
                            <li className="project-nav-item">
                                <Link to="#easter-egg" className="project-nav-link">
                                    Easter egg
                                </Link>
                            </li>
                            <li className="project-nav-item">
                                <Link to="#team" className="project-nav-link">
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
