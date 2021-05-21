import React from 'react'
import { NavLink } from 'react-router-dom'

import ServiceIcon1 from '../../assets/images/icons/services/icon-1.svg'
import ServiceIcon2 from '../../assets/images/icons/services/icon-2.svg'
import ServiceIcon3 from '../../assets/images/icons/services/icon-3.svg'
import ServiceIcon4 from '../../assets/images/icons/services/icon-4.svg'


export function ServiceBlock(props) {
    return (
        <div className="service-block">
            <div className="service-block-title">
                <img src={props.icon} alt="Architecture planning" />
                {props.title}
            </div>
            <div className="service-block-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
            </div>
            <div className="service-block-view-more">
                <NavLink className="view-more" to="#">
                    <div>
                        View more
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default function Services() {
    return (
        <section className="section section-services">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2 className="container-title">
                            Services
                        </h2>
                        <div className="services-row">
                            <ServiceBlock
                                icon={ServiceIcon1}
                                title="Architecture planning"
                            />
                            <ServiceBlock
                                icon={ServiceIcon2}
                                title="Residental interior design"
                            />
                            <ServiceBlock
                                icon={ServiceIcon3}
                                title="Commercial design"
                            />
                            <ServiceBlock
                                icon={ServiceIcon4}
                                title="Furniture design"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
