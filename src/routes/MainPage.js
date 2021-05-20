/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Clients from '../components/mainpage/Clients'
import Contact from '../components/mainpage/Contact'
import HeroBanner from '../components/mainpage/HeroBanner'
import Projects from '../components/mainpage/Projects'
import Services from '../components/mainpage/Services'
import Team from '../components/mainpage/Team'



export default function MainPage() {
    return (
        <main>
            <HeroBanner />
            <Services />
            <Projects />
            <Clients />
            <Team />
            <Contact />
        </main>
    )
}
