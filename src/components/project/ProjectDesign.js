import React from 'react'

import DesignImage1 from '../../assets/images/projects/design/design-1.jpg'
import DesignImage2 from '../../assets/images/projects/design/design-2.jpg'
import DesignImage3 from '../../assets/images/projects/design/design-3.jpg'
import DesignImageBlueprints from '../../assets/images/projects/design/design-blueprints.jpg'

export default function ProjectDesign() {
    return (
        <section className="section project-section" id="project-design">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2>
                            Design
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <div className="project-about-image-container">
                            <div className="project-about-image-row height-800px">
                                <div className="project-about-image-block">
                                    <img src={DesignImageBlueprints} alt="Villa Kuzmina" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-about-image-container">
                <div className="project-about-image-row height-500px">
                    <div className="project-about-image-block">
                        <img src={DesignImage1} alt="Villa Kuzmina" />
                    </div>
                    <div className="project-about-image-block">
                        <img src={DesignImage2} alt="Villa Kuzmina" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <p className="top-50px width-960px">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.
                        </p>
                        <div className="project-about-image-container">
                            <div className="project-about-image-row height-700px">
                                <div className="project-about-image-block">
                                    <img src={DesignImage3} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-about-image-block">
                                    <img src={DesignImage3} alt="Villa Kuzmina" />
                                </div>
                                <div className="project-about-image-block">
                                    <img src={DesignImage3} alt="Villa Kuzmina" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
