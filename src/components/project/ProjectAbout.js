import React from 'react'

import AboutImage1 from '../../assets/images/projects/about/about-1.png'
import AboutImage2 from '../../assets/images/projects/about/about-2.jpg'
import AboutImage3 from '../../assets/images/projects/about/about-3.jpg'
import AboutImage4 from '../../assets/images/projects/about/about-4.jpg'
import AboutImage5 from '../../assets/images/projects/about/about-5.jpg'

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
                        <img src={AboutImage2} alt="Villa Kuzmina" />
                    </div>
                    <div className="project-about-image-block">
                        <img src={AboutImage3} alt="Villa Kuzmina" />
                    </div>
                </div>
                <div className="project-about-image-row height-500px">
                    <div className="project-about-image-block">
                        <img src={AboutImage4} alt="Villa Kuzmina" />
                    </div>
                    <div className="project-about-image-block">
                        <img src={AboutImage5} alt="Villa Kuzmina" />
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
