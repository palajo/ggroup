/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function SectionContact() {
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 col-xl-8 col-xxl-6 contact-form">
                        <h3 className="bold">
                            Are you interested in construction with us?
                        </h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <form>
                            <div className="form-row">
                                <div className="form-block">
                                    <label>Name</label>
                                    <input type="text" className="text-input" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-block">
                                    <label>Phone number</label>
                                    <input type="text" className="text-input" />
                                </div>
                                <div className="form-block">
                                    <label>E-mail</label>
                                    <input type="email" className="text-input" />
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
                        <div className="contacts-phone">
                            <a href="#">
                                <span>or call</span>
                                +38 099 98 47 911
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
