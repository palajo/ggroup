import React from 'react'

import VillaKuzmina from '../assets/images/projects/fullsize/villa-kuzmina.jpg'

export default function ProjectPage() {
    return (
        <main>
            <section className="project-hero">
                <div className="container-fluid p-0">
                    <h1>
                        VILLA KUZMINA
                    </h1>
                    <img src={VillaKuzmina} alt="Villa Kuzmina Main" />
                </div>
            </section> 
        </main>
    )
}
