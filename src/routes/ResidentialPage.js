import React from 'react'

import ProjectContact from '../components/project/ProjectContact'
import ServicesHero from '../components/services/ServicesHero'

import ResidentialImage1 from '../assets/images/services/residential-1.jpg'
import ResidentialImage2 from '../assets/images/services/residential-2.jpg'
import ResidentialImage3 from '../assets/images/services/residential-3.jpg'
import ResidentialImage4 from '../assets/images/services/residential-4.jpg'
import ResidentialImage5 from '../assets/images/services/residential-5.jpg'
import ResidentialImage6 from '../assets/images/services/residential-6.jpg'

import Clients from '../components/mainpage/Clients'
import ProjectsOther from '../components/projects/ProjectsOther'

export default function ResidentialPage() {
    return (
        <main>
            <ServicesHero />
            <ProjectContact />
            <section className="section project-section">
                <div className="container">
                    <div className="row">
                        <div className="container-body">
                            <h2>
                                Housing and apartments
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                            <div className="project-about-image-container">
                                <div className="project-about-image-row height-800px">
                                    <div className="project-about-image-block">
                                        <img src={ResidentialImage1} alt="Villa Kuzmina" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-about-image-container">
                    <div className="project-about-image-row height-700px">
                        <div className="project-about-image-block">
                            <img src={ResidentialImage2} alt="Villa Kuzmina" />
                        </div>
                        <div className="project-about-image-block">
                            <img src={ResidentialImage3} alt="Villa Kuzmina" />
                        </div>
                        <div className="project-about-image-block">
                            <img src={ResidentialImage4} alt="Villa Kuzmina" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="container-body">
                            <p className="top-50px width-720px">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.
                            </p>
                            <div className="project-about-image-container">
                                <div className="project-about-image-row height-500px">
                                    <div className="project-about-image-block">
                                        <img src={ResidentialImage5} alt="Villa Kuzmina" />
                                    </div>
                                    <div className="project-about-image-block">
                                        <img src={ResidentialImage6} alt="Villa Kuzmina" />
                                    </div>
                                </div>
                            </div>
                            <p className="top-50px width-720px">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.
                            </p>
                            <button className="button">
                                Contacts us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsOther />
            <Clients />
            <ProjectContact />
        </main>
    )
}
