/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function SectionDoubleContact() {
    return (
        <section className="section" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-container">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="false">
                                        I'm interested in project
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="career-tab" data-bs-toggle="tab" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="true">
                                        I'm interested in a career
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane" id="project" role="tabpanel" aria-labelledby="project-tab">
                                    <div className="tab-pane-row">
                                        <div className="tab-pane-col contacts-tab-block">
                                            <h3 className="bold"> 
                                                Are you interested in career?
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                            </p>
                                            <div className="contacts-phone">
                                                <a href="#">
                                                    +38 099 98 47 911
                                                    <span>or call</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane-col">
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
                                <div className="tab-pane show active" id="career" role="tabpanel" aria-labelledby="career-tab">
                                    <div className="tab-pane-row">
                                        <div className="tab-pane-col contacts-tab-block">
                                            <h3 className="bold"> 
                                                Are you interested in career?
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                            </p>
                                            <div className="contacts-phone">
                                                <a href="#">
                                                    +38 099 98 47 911
                                                    <span>or call</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane-col">
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
            </div>
        </section>
    )
}
