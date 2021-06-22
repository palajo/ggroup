/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import CommercialImage1 from '../assets/images/commercial-design/image-1.jpg'
import CommercialImage2 from '../assets/images/commercial-design/image-2.jpg'
import CommercialImage3 from '../assets/images/commercial-design/image-3.jpg'
import CommercialImage4 from '../assets/images/commercial-design/image-4.jpg'
import CommercialImage5 from '../assets/images/commercial-design/image-5.jpg'
import CommercialImage6 from '../assets/images/commercial-design/image-6.jpg'
import CommercialImage7 from '../assets/images/commercial-design/image-7.jpg'
import CommercialImage8 from '../assets/images/commercial-design/image-8.jpg'
import CommercialImage9 from '../assets/images/commercial-design/image-9.jpg'
import CommercialImage10 from '../assets/images/commercial-design/image-10.jpg'
import CommercialImage11 from '../assets/images/commercial-design/image-11.jpg'
import CommercialImage12 from '../assets/images/commercial-design/image-12.jpg'
import CommercialImage13 from '../assets/images/commercial-design/image-13.jpg'
import CommercialImage14 from '../assets/images/commercial-design/image-14.jpg'
import CommercialImage15 from '../assets/images/commercial-design/image-15.jpg'
import CommercialImage16 from '../assets/images/commercial-design/image-16.jpg'
import CommercialImage17 from '../assets/images/commercial-design/image-17.jpg'

import SectionClients from '../components/sections/SectionClients'
import SectionContact from '../components/sections/SectionContact'

export default function CommercialDesignPage() {
    return (
        <main>
            <section className="project-hero">
                <div className="container-fluid p-0">
                    <div className="project-hero-title">
                        <h1 className="project-hero-title-title">
                            Commercial design
                        </h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        </p>
                    </div>
                    <div className="project-hero-background">
                        <img src={CommercialImage1} alt="Villa Kuzmina Main" />
                    </div>
                </div>
            </section> 
            <section className="section gray double-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title text-center">
                                Our commercial advantages
                            </h2>
                            <ul className="nav project-navigation">
                                <li className="nav-item">
                                    <a href="#restaurants-and-cafes" className="nav-link">
                                        Restaurants and cafes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#clinics" className="nav-link">
                                        Clinics
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#offices" className="nav-link">
                                        Offices 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#other-commercial-facilities" className="nav-link">
                                        Other commercial facilities
                                    </a>
                                </li>
                            </ul>
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
            <section className="section four-blocks" id="restaurants-and-cafes">
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">
                                Restaurants and cafes
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-12 project-gallery-block block-with-text image-height-500">
                                <div className="project-gallery-block-image">
                                    <img src={CommercialImage2} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-gallery-block-content">
                                    <div className="project-gallery-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus erro
                                    </div>
                                    <div className="project-gallery-block-links">
                                        <a href="#" className="nav-link">
                                            contacts us
                                        </a>
                                        <a href="#" className="nav-link">
                                            view samples
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage3} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage4} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage5} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section four-blocks reverse" id="clinics">
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">
                                Clinics
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-12 project-gallery-block block-with-text image-height-500">
                                <div className="project-gallery-block-image">
                                    <img src={CommercialImage6} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-gallery-block-content">
                                    <div className="project-gallery-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus erro
                                    </div>
                                    <div className="project-gallery-block-links">
                                        <a href="#" className="nav-link">
                                            contacts us
                                        </a>
                                        <a href="#" className="nav-link">
                                            view samples
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage7} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage8} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage9} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section four-blocks" id="offices">
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">
                                Offices
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-12 project-gallery-block block-with-text image-height-500">
                                <div className="project-gallery-block-image">
                                    <img src={CommercialImage10} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-gallery-block-content">
                                    <div className="project-gallery-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus erro
                                    </div>
                                    <div className="project-gallery-block-links">
                                        <a href="#" className="nav-link">
                                            contacts us
                                        </a>
                                        <a href="#" className="nav-link">
                                            view samples
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage11} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage12} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage13} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section four-blocks reverse" id="other-commercial-facilities">
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">
                                Other commercial facilities
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-12 project-gallery-block block-with-text image-height-500">
                                <div className="project-gallery-block-image">
                                    <img src={CommercialImage14} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-gallery-block-content">
                                    <div className="project-gallery-block-description">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus erro
                                    </div>
                                    <div className="project-gallery-block-links">
                                        <a href="#" className="nav-link">
                                            contacts us
                                        </a>
                                        <a href="#" className="nav-link">
                                            view samples
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage15} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage16} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-300">
                                <img src={CommercialImage17} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionClients />
            <SectionContact />
        </main>
    )
}
