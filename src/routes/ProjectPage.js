import React from 'react'

import ProjectAbout from '../components/project/ProjectAbout'
import ProjectContact from '../components/project/ProjectContact'
import ProjectDesign from '../components/project/ProjectDesign'
import ProjectEgg from '../components/project/ProjectEgg'
import ProjectHero from '../components/project/ProjectHero'
import ProjectLocation from '../components/project/ProjectLocation'
import ProjectNavigation from '../components/project/ProjectNavigation'
import ProjectTeam from '../components/project/ProjectTeam'


export default function ProjectPage() {
    return (
        <main>
            <ProjectHero />
            <ProjectNavigation />
            <ProjectAbout />
            <ProjectLocation />
            <ProjectDesign />
            <ProjectEgg />
            <ProjectTeam />
            <ProjectContact />
        </main>
    )
}
