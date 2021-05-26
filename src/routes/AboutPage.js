import React from 'react'

import Clients from '../components/mainpage/Clients'
import Contact from '../components/mainpage/Contact'

export default function AboutPage() {
    return (
        <main>
            <section className="section about-hero">
                <div className="about-hero-background">
                </div>
            </section>
            <section className="section about-about">
                <div className="container">
                    <div className="row">
                        <div className="container-body">
                            <h2>About us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Eu turpis egestas pretium aenean pharetra magna ac placerat. Est velit egestas dui id. Purus viverra accumsan in nisl nisi scelerisque.
                                Libero justo laoreet sit amet.
                            </p>

                            <div className="rotated-text">
                                <div>
                                    We are metter
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="space-50px"></div>
            <Clients />
            <Contact />
        </main>
    )
}
