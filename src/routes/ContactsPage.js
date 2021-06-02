import React from 'react'
import SectionContact from '../components/sections/SectionContact'

export default function ContactsPage() {
    return (
        <main>
            <section className="section section-contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h1 className="section-title">
                                Contacts
                            </h1>
                            <div>
                                <h3 className="bold">
                                    Globarch Group
                                </h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Lviv, street Basarab, 3
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            globarch.info@gmail.com
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            +38 099 98 47 911
                                        </a>
                                    </li>
                                </ul>
                                <div className="get-in-touch-social">
                                    <a href="#">
                                        <div className="icon behance"></div>
                                    </a>
                                    <a href="#">
                                        <div className="icon facebook"></div>
                                    </a>
                                    <a href="#">
                                        <div className="icon instagram"></div>
                                    </a>
                                    <a href="#">
                                        <div className="icon youtube"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 contacts-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d643.3677463122051!2d24.034190460769146!3d49.83360726305589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea77690e785aad1b!2sGlobarch%20Group!5e0!3m2!1sru!2sua!4v1621930265936!5m2!1sru!2sua" title="globarch-group-location" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <SectionContact />
        </main>
    )
}
