import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <div className="container">
                <div className="row">
                    <div className="hero-banner-content">
                        <h1 className="hero-banner-title">
                            Lorem ipsum
                    </h1>
                        <NavLink to="#">
                            <button className="button">
                                View all services
                            </button>
                        </NavLink>
                    </div>
                    <div className="hero-banner-social">
                        <NavLink to="#">
                            <div className="icon white behance"></div>
                        </NavLink>
                        <NavLink to="#">
                            <div className="icon white facebook"></div>
                        </NavLink>
                        <NavLink to="#">
                            <div className="icon white instagram"></div>
                        </NavLink>
                        <NavLink to="#">
                            <div className="icon white youtube"></div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
