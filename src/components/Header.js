/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery'

import GlobarchGroupLogo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';

export default function Header() {

    useEffect(() => {
        $(document).ready(function() {
            $('.dropdown').on('mouseenter',function(){
                $(this).find('.dropdown-menu').fadeIn(200);
            });

            $('.dropdown').on('mouseleave',function(){
                $(this).find('.dropdown-menu').fadeOut(100);
            });

            $('.navigation-toggler > .icon-burgermenu').click(function() {
                $(this).toggleClass('active');
                $('body').toggleClass('overflow-hidden');
                $('.right-block').toggle('slide');
            })
        });
    }, []);

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="left-block">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src={GlobarchGroupLogo} alt="Globarch Group Logo" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="navigation-toggler">
                            <div className="icon-burgermenu">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="right-block">
                            <ul className="nav main-nav">
                                <li className="nav-item">
                                    <NavLink to="/services/architecture-planning" className="nav-link" exact>
                                        Architecture planning
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services/residential-interrior-design" className="nav-link" exact>
                                        Residental interior design
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services/furniture-deisgn" className="nav-link" exact>
                                        Furniture design
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services/commercial-design" className="nav-link" exact>
                                        Commercial design
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link" exact>
                                        About us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contacts" className="nav-link" exact>
                                        Contacts
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="dropdown language-switcher-dropdown">
                                <a className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    en
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item active" href="#">
                                            EN
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            UA
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            RU
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="contacts-phone">
                                <a href="#">
                                    <span>or call</span>
                                    +38 099 98 47 911
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
