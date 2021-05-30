import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="section-title">
                                Oops.. Page was not found.
                            </h1>
                            <p>
                                Probably you made a mistake in url or page is not available right now.<br />
                                Please, go back to mainpage
                            </p>
                            <NavLink to="/">
                                <button className="button mt-5">
                                    back to mainpage
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
