import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <main>
            <section className="section section-error">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>
                                This page is being developed..
                            </h1>
                            <p>
                                Leadbranding will take care of your project, but now the time hasn't come for this page.
                                We are working on it!
                            </p>
                            <NavLink to="/">
                                <button className="button">
                                    Back to mainpage
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
