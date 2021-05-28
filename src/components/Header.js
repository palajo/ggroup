/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery'

import GlobarchGroupLogo from '../assets/images/logo.svg'

export default function Header() {

    useEffect(() => {
        $(document).ready(function() {
            $('.dropdown').on('mouseenter',function(){
                $(this).find('.dropdown-menu').fadeIn(200);
            });

            $('.dropdown').on('mouseleave',function(){
                $(this).find('.dropdown-menu').fadeOut(100);
            });
        });
    })

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="left-block">
                            <div className="logo">
                                <a href="#">
                                    <img src={GlobarchGroupLogo} alt="Globarch Group Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="right-block">
                            <ul className="nav main-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Architecture planning
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Residental interior design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Furniture design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Commercial design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                            <div className="dropdown">
                                <a className="dropdown-item-active dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
