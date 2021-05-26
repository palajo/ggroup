/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom';

export default function Contact() {
    
    useEffect(() => {
        $(document).ready(function() {
            $('ul.tabs-nav > li.tabs-nav-item > a.tabs-nav-link').click(function(e) {
                e.preventDefault();
                var sectionId = $(this).closest('ul.tabs-nav').attr('id');
                var tabId = $(this).attr('id');

                $('ul#' + sectionId + '.tabs-nav > li.tabs-nav-item > a.tabs-nav-link').removeClass('active');
                $(this).addClass('active');

                $('#' + sectionId + '.tab-content > .tab-pane').removeClass('active');
                $('#' + sectionId + '.tab-content > #' + tabId + '.tab-pane').addClass('active');
            });
        });
    })

    return (
        <section className="section section-contact">
            <div className="container">
                <div className="row">
                    <div className="tabs">
                        <ul className="tabs-nav" id="contact-tabs" role="tablist">
                            <li className="tabs-nav-item">
                                <a href="#" className="tabs-nav-link active" id="project-tab">
                                    I'm interested in project
                                </a>
                            </li>
                            <li className="tabs-nav-item">
                                <a href="#" className="tabs-nav-link" id="career-tab">
                                    I'm interested in a career
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="contact-tabs">
                            <div className="tab-pane active" role="tabpanel" id="project-tab">
                                <div className="contact-row">
                                    <div className="contact-block">
                                        <div>
                                            <div className="offer-block">
                                                <h3 className="offer-title">
                                                    Are you interested in construction with us?
                                                </h3>
                                                <p className="offer-description">
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                                </p>
                                            </div>
                                            <div className="offer-phone">
                                                <NavLink to="tel:+38 099 98 47 911">+38 099 98 47 911</NavLink>
                                                <span>or call</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-block">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="project-title">Project title</label>
                                                    <input type="text" className="text-input" id="project-title" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="project-description">Project description</label>
                                                    <textarea className="textarea-input" id="project-description" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="file-input">Attachment (up to 10mb)</label>
                                                    <label htmlFor="file-input" className="file-input">
                                                        Upload file
                                                        <input type="file" id="file-input" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="location">Location</label>
                                                    <input type="text" className="text-input" id="location" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="text-input" id="name" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="company-name">Company name</label>
                                                    <input type="text" className="text-input" id="company-name" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="phone">Phone number</label>
                                                    <input type="text" className="text-input phone-input" id="phone" />
                                                </div>
                                                <div className="form-block">
                                                    <label htmlFor="email">E-mail</label>
                                                    <input type="email" className="text-input" id="email" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <div className="checkbox-input">
                                                        <input type="checkbox" id="checkbox-input" />
                                                        <label htmlFor="checkbox-input">
                                                            I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button" type="submit">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" role="tabpanel" id="career-tab">
                                <div className="contact-row">
                                    <div className="contact-block">
                                        <div>
                                            <div className="offer-block">
                                                <h3 className="offer-title">
                                                    Are you interested in career?
                                                </h3>
                                                <p className="offer-description">
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                                                </p>
                                            </div>
                                            <div className="offer-phone">
                                                <NavLink to="tel:+38 099 98 47 911">+38 099 98 47 911</NavLink>
                                                <span>or call</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-block">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="position-2">Position title</label>
                                                    <input type="text" className="text-input" id="position-2" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="about-2">Briefly about you</label>
                                                    <textarea className="textarea-input" id="about-2" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="file-input-2">Attachment (up to 10mb)</label>
                                                    <label htmlFor="file-input-2" className="file-input">
                                                        Upload file
                                                        <input type="file" id="file-input-2" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="location-2">Location</label>
                                                    <input type="text" className="text-input" id="location-2" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="name-2">Name</label>
                                                    <input type="text" className="text-input" id="name-2" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <label htmlFor="phone-2">Phone number</label>
                                                    <input type="text" className="text-input phone-input" id="phone-2" />
                                                </div>
                                                <div className="form-block">
                                                    <label htmlFor="email-2">E-mail</label>
                                                    <input type="email" className="text-input" id="email-2" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-block">
                                                    <div className="checkbox-input">
                                                        <input type="checkbox" id="checkbox-input-2" />
                                                        <label htmlFor="checkbox-input-2">
                                                            I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button" type="submit">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}
