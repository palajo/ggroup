import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'

import Logo from '../assets/images/logo.svg'

export default function Header() {

    useEffect(() => {
        $(document).ready(function() {
            var value = $('ul.dropdown-list > li.dropdown-list-item > a.dropdown-list-link.active').html();
            $('.current-language').html(value);

            $('.dropdown').mouseenter(function() {
                $(this).find('.dropdown-content').stop().fadeIn(200)
            });
            $('.dropdown').mouseleave(function() {
                $(this).find('.dropdown-content').stop().fadeOut(100)
            });
        });
    });

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="left-block">
                        <div className="logo">
                            <NavLink to="/">
                                <img src={Logo} alt="Globarch Group Logo" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="right-block">
                        <div>
                            <ul className="main-nav">
                                <li className="main-nav-item">
                                    <NavLink to="/services/architecture-planning" className="main-nav-link" exact>
                                        Architecture planning
                                    </NavLink>
                                </li>
                                <li className="main-nav-item">
                                    <NavLink to="/services/residential-interrior-design" className="main-nav-link" exact>
                                        Residental interior design
                                    </NavLink>
                                </li>
                                <li className="main-nav-item">
                                    <NavLink to="/services/furniture-design" className="main-nav-link" exact>
                                        Furniture design
                                    </NavLink>
                                </li>
                                <li className="main-nav-item">
                                    <NavLink to="/services/commercial-design" className="main-nav-link" exact>
                                        Commercial design
                                    </NavLink>
                                </li>
                                <li className="main-nav-item">
                                    <NavLink to="/about-us" className="main-nav-link" exact>
                                        About us
                                    </NavLink>
                                </li>
                                <li className="main-nav-item">
                                    <NavLink to="/contacts" className="main-nav-link" exact>
                                        Contacts
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="dropdown">
                                <NavLink to="#" className="dropdown-value current-language">
                                    EN
                                </NavLink>
                                <div className="dropdown-content">
                                    <ul className="dropdown-list">
                                        <li className="dropdown-list-item">
                                            <NavLink to="#" className="dropdown-list-link current-language">
                                                EN
                                            </NavLink>
                                        </li>
                                        <li className="dropdown-list-item">
                                            <NavLink to="#" className="dropdown-list-link">
                                                UA
                                            </NavLink>
                                        </li>
                                        <li className="dropdown-list-item">
                                            <NavLink to="#" className="dropdown-list-link">
                                                RU
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
