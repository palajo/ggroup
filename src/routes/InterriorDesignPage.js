import React from 'react'

import SectionClients from '../components/sections/SectionClients'
import SectionContact from '../components/sections/SectionContact'
import ProjectsSlider from '../components/sliders/ProjectsSlider'

import InterriorImage1 from '../assets/images/interrior-design/image-1.jpg'
import InterriorImage2 from '../assets/images/interrior-design/image-2.jpg'
import InterriorImage3 from '../assets/images/interrior-design/image-3.jpg'
import InterriorImage4 from '../assets/images/interrior-design/image-4.jpg'
import InterriorImage5 from '../assets/images/interrior-design/image-5.jpg'
import InterriorImage6 from '../assets/images/interrior-design/image-6.jpg'
import InterriorImage7 from '../assets/images/interrior-design/image-7.jpg'



export default function InterriorDesignPage() {
    return (
        <main>
            <section className="project-hero">
                <div className="container-fluid p-0">
                    <div className="project-hero-title">
                        <h1 className="project-hero-title-title">
                            VILLA KUZMINA
                        </h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        </p>
                    </div>
                    <div className="project-hero-background">
                        <img src={InterriorImage1} alt="Villa Kuzmina Main" />
                    </div>
                </div>
            </section> 
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="benefits-list">
                                <li>
                                    The need to scale very fast to achieve the set goals
                                </li>
                                <li>
                                    Taxes, insurance, and other extra expenses, which come along with extra in-house teams
                                </li>
                                <li>
                                    The need to expand technical expertise
                                </li>
                                <li>
                                    Expensive rent and additional costs associated with location
                                </li>
                                <li>
                                    Overheated domestic market and incredible competition for resources
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <SectionContact />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">
                                Housing and apartments
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 image-height-800">
                                <img src={InterriorImage2} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={InterriorImage3} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={InterriorImage4} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-4 project-gallery-block image-height-700">
                                <img src={InterriorImage5} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={InterriorImage6} alt="Villa Kuzmina" />
                            </div>
                            <div className="col-6 project-gallery-block image-height-500">
                                <img src={InterriorImage7} alt="Villa Kuzmina" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .
                            </p>
                            <button className="button mt-30px">
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">
                                Our projects
                            </h2>
                            <ProjectsSlider />
                        </div>
                    </div>
                </div>
            </section>
            <SectionClients />
            <SectionContact />
        </main>
    )
}
