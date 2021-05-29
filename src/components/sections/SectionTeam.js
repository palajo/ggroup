import React from 'react'

import TeamSlider from '../sliders/TeamSlider'

export default function SectionTeam() {
    return (
        <section className="section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">
                            Our team
                        </h2>
                        <TeamSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}
