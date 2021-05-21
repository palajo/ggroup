/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import FooterLogo from '../assets/images/logo-white.svg'
import LeadbrandingLogo from '../assets/images/leadbranding-white.svg'
import { NavLink } from 'react-router-dom'

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
                                <a href="mailto:globarch.info@gmail.com" className="footer-nav-link">
                                    globarch.info@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="leadbranding">
                            Crafted by <NavLink to="#"><img src={LeadbrandingLogo} /></NavLink>
                        </div>
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
                                <NavLink to="#">
                                    Contacts
                                </NavLink>
                            </div>
                            <div className="get-in-touch-social">
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
                    <div className="right-block">
                        <ul className="footer-nav reverse">
                            <li className="footer-nav-item">
                                <NavLink to="/" className="footer-nav-link" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/services" className="footer-nav-link" exact>
                                    Services
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/projects" className="footer-nav-link" exact>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/clients" className="footer-nav-link" exact>
                                    Clients
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/about-us" className="footer-nav-link" exact>
                                    About us
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/privacy-policy" className="footer-nav-link" exact>
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="footer-nav-item">
                                <NavLink to="/terms-of-use" className="footer-nav-link" exact>
                                    Terms of use
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
