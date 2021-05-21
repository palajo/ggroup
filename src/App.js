import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/styles.scss'

import ScrollToTop from "./ScrollToTop"
import Footer from "./components/Footer"
import Header from "./components/Header"

import MainPage from "./routes/MainPage"
import ProjectPage from "./routes/ProjectPage"
import ErrorPage from './routes/ErrorPage'

function App() {
    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <Switch>
                    <Route component={MainPage} path="/" exact />
                    <Route component={ProjectPage} path="/project" exact />
                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default App