import React from 'react'

import ServiceImage1 from '../../assets/images/services/service-1.jpg'

export default function ServicesHero() {
    return (
        <section className="section services-hero">
            <h1 className="project-hero-title">
                Residental interior design
            </h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            </p>
            <div className="services-hero-image">
            </div>
            <div className="container">
                <div className="row">
                    <div className="container-body">
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
    )
}
