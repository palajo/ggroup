import React from 'react'

export default function ProjectContact() {
    return (
        <section className="section project-contact">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h3>
                            Are you interested in construction with us?
                        </h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <form>
                            <div className="form-row">
                                <div className="form-block">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="text-input" id="name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-block">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="text" className="text-input" id="phone" />
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
                        <div className="offer-phone">
                            <span>or call</span>
                            <a href="tel:+38 099 98 47 911">+38 099 98 47 911</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
