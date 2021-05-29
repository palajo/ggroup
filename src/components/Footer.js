/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

import LeadLogo from '../assets/images/leadbranding-white.svg'
import LogoWhite from '../assets/images/logo-white.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4 left-block">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Ukraine, Lviv, Basarab 3 st.
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="mailto:globarch.info@gmail.com" className="nav-link">
                                    globarch.info@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="leadbranding">
                            <a href="#">Crafted by <img src={LeadLogo} alt="leadbranding.net / logo" /></a>
                        </div>
                    </div>
                    <div className="col-4 middle-block">
                        <div className="footer-logo">
                            <img src={LogoWhite} alt="Globarch Footer Logo" />
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
                    <div className="col-4 right-block">
                        <ul className="nav flex-column reverse">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" exact>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link" exact>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/clients" className="nav-link" exact>
                                    Clients
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/NavLinkbout-us" className="nav-link" exact>
                                    About us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/privacy-policy" className="nav-link" exact>
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/terms-of-use" className="nav-link" exact>
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
