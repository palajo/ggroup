import React from 'react'
import { NavLink } from 'react-router-dom'

import TeamImage from '../assets/images/projects/fullsize/villa-kuzmina.jpg'
import SectionClients from '../components/sections/SectionClients'
import SectionDoubleContact from '../components/sections/SectionDoubleContact'

export default function AboutPage() {
    return (
        <main>
            <section className="about-hero">
                <div className="about-hero-background">
                    <img src={TeamImage} alt="Globarch Team" />
                </div>
            </section>
            <section className="section gray double-padding about-information">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                About us
                            </h2>
                            <p className="size-18px">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam ...<br /><br />
                                
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam ...<br /><br />

                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam ...
                            </p>
                            <div className="view-projects">
                                <NavLink to="/projects" className="nav-link">
                                    View projects
                                </NavLink>
                            </div>
                            <div className="slogan">
                                We are metter
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionClients />
            <SectionDoubleContact />
        </main>
    )
}
