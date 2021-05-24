import React from 'react'

import ProjectAbout1 from '../../assets/images/projects/big/project-1.jpg'

export default function ProjectEgg() {
    return (
        <section className="section project-section" id="project-egg">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2>
                            Easter egg
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <div className="project-about-image-container">
                            <div className="project-about-image-row height-800px">
                                <div className="project-about-image-block">
                                    <img src={ProjectAbout1} alt="Villa Kuzmina" />
                                </div>
                            </div>
                            <div className="project-about-image-row height-700px">
                                <div className="project-about-image-block">
                                    <img src={ProjectAbout1} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-about-image-block">
                                    <img src={ProjectAbout1} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-about-image-block">
                                    <img src={ProjectAbout1} alt="Villa Kuzmina" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
