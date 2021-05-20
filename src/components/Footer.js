/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import FooterLogo from '../assets/images/logo-white.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="left-block">
                        <ul className="footer-nav">
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Ukraine, Lviv, Basarab 3 st.
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    globarch.info@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="middle-block">
                        <div className="footer-logo">
                            <img src={FooterLogo} />
                        </div>
                        <div className="get-in-touch">
                            <div className="get-in-touch-title">
                                Get in touch
                            </div>
                            <div className="get-in-touch-link">
                                <a href="#">
                                    Contacts
                                </a>
                            </div>
                            <div className="get-in-touch-social">
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
                    <div className="right-block">
                        <ul className="footer-nav reverse">
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Services
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Projects
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Clients
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    About us
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">
                                    Terms of use
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
