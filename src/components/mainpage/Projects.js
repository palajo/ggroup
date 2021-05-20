/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import ProjectImage1 from '../../assets/images/projects/project-1.jpg'
import ProjectImage2 from '../../assets/images/projects/project-2.jpg'
import ProjectImage3 from '../../assets/images/projects/project-3.jpg'
import ProjectImage4 from '../../assets/images/projects/project-4.jpg'


export function ProjectBlock(props) {
    return (
        <div className="project-block">
            <div className="project-image">
                <img src={props.image} />
            </div>
            <div className="project-title-row">
                <div className="project-title-title">
                    <a href="#">
                        {props.title}
                    </a>
                </div>
                <div className="project-full-view">
                    <a href="#" className="full-view">
                        <div>
                            Full view
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section className="section section-projects">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2 className="container-title">
                            Projects
                        </h2>
                        <div className="projects-row">
                            <ProjectBlock
                                image={ProjectImage1}
                                title="Villa Kuzmina"
                            />
                            <ProjectBlock
                                image={ProjectImage2}
                                title="Residential complex “National”"
                            />
                            <ProjectBlock
                                image={ProjectImage3}
                                title="Ice Arena"
                            />
                            <ProjectBlock
                                image={ProjectImage4}
                                title="Green Garden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
