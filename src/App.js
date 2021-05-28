import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/styles.scss'

import ScrollToTop from "./ScrollToTop"
import Footer from "./components/Footer"
import Header from "./components/Header"

import MainPage from "./routes/MainPage"
import ProjectPage from "./routes/ProjectPage"
import ErrorPage from './routes/ErrorPage'
import ContactsPage from './routes/ContactsPage'
import AboutPage from './routes/AboutPage'
import ProjectsPage from './routes/ProjectsPage'
import ResidentialPage from './routes/ResidentialPage'

function App() {
    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <Switch>
                    <Route component={MainPage} path="/" exact />
                    <Route component={ProjectsPage} path="/projects" exact />
                    <Route component={ProjectPage} path="/projects/project" exact />
                    <Route component={ContactsPage} path="/contacts" exact />
                    <Route component={AboutPage} path="/about-us" exact />

                    <Route component={ResidentialPage} path="/services/residential-interrior-design" exact />


                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default App