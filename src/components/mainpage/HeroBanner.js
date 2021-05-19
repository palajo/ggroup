/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <div className="container">
                <div className="row">
                    <div className="hero-banner-content">
                        <h1 className="hero-banner-title">
                            Lorem ipsum
                    </h1>
                        <button className="button">
                            View all services
                    </button>
                    </div>
                    <div className="hero-banner-social">
                        <a href="#">
                            <div className="icon white behance"></div>
                        </a>
                        <a href="#">
                            <div className="icon white facebook"></div>
                        </a>
                        <a href="#">
                            <div className="icon white instagram"></div>
                        </a>
                        <a href="#">
                            <div className="icon white youtube"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
