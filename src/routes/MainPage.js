/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HeroBanner from '../components/mainpage/HeroBanner'
import Projects from '../components/mainpage/Projects'
import Services from '../components/mainpage/Services'



export default function MainPage() {
    return (
        <main>
            <HeroBanner />
            <Services />
            <Projects />
        </main>
    )
}
