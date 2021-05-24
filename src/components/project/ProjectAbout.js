import React from 'react'

import ProjectAbout1 from '../../assets/images/projects/big/project-1.jpg'
import AboutImage1 from '../../assets/images/projects/about/about-1.png'

export default function ProjectAbout() {
    return (
        <section className="section project-section" id="project-about">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2>
                            About
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut
                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <hr />
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut
                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <div className="project-about-image-container">
                            <div className="project-about-image-row height-800px">
                                <div className="project-about-image-block">
                                    <img src={AboutImage1} alt="Villa Kuzmina" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-about-image-container">
                <div className="project-about-image-row height-500px">
                    <div className="project-about-image-block">
                        <img src={ProjectAbout1} alt="Villa Kuzmina" />
                    </div>
                    <div className="project-about-image-block">
                        <img src={ProjectAbout1} alt="Villa Kuzmina" />
                    </div>
                </div>
                <div className="project-about-image-row height-500px">
                    <div className="project-about-image-block">
                        <img src={ProjectAbout1} alt="Villa Kuzmina" />
                    </div>
                    <div className="project-about-image-block">
                        <img src={ProjectAbout1} alt="Villa Kuzmina" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <p className="top-50px width-960px">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
