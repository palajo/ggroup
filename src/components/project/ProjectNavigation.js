import React from 'react'

export default function ProjectNavigation() {
    return (
        <section className="section project-navigation">
            <div className="container">
                <div className="row">
                    <ul className="project-nav">
                        <li className="project-nav-item">
                            <a href="#project-about" className="project-nav-link">
                                About
                            </a>
                        </li>
                        <li className="project-nav-item">
                            <a href="#project-location" className="project-nav-link">
                                Location
                            </a>
                        </li>
                        <li className="project-nav-item">
                            <a href="#project-design" className="project-nav-link">
                                Design
                            </a>
                        </li>
                        <li className="project-nav-item">
                            <a href="#project-egg" className="project-nav-link">
                                Easter egg
                            </a>
                        </li>
                        <li className="project-nav-item">
                            <a href="#team" className="project-nav-link">
                                Team
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
