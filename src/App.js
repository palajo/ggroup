import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/styles/styles.scss'

import Header from './components/Header';
import Footer from './components/Footer';

import MainPage from './routes/MainPage';
import ProjectsPage from './routes/ProjectsPage';
import ProjectPage from './routes/ProjectPage';
import ErrorPage from './routes/ErrorPage';
import ScrollToTop from './ScrollToTop';
import AboutPage from './routes/AboutPage';
import ContactsPage from './routes/ContactsPage';
import InterriorDesignPage from './routes/InterriorDesignPage';
import FurnitureDeisgnPage from './routes/FurnitureDeisgnPage';
import CommercialDesignPage from './routes/CommercialDesignPage';
import ArchitecturePlanningPage from './routes/ArchitecturePlanningPage';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <Switch>
                    <Route component={MainPage} path="/" exact />
                    <Route component={ProjectsPage} path="/projects" exact />
                    <Route component={ProjectPage} path="/projects/villa-kuzmina" exact />
                    <Route component={AboutPage} path="/about" exact />
                    <Route component={ContactsPage} path="/contacts" exact />

                    <Route component={ArchitecturePlanningPage} path="/services/architecture-planning" exact />
                    <Route component={InterriorDesignPage} path="/services/residential-interrior-design" exact />
                    <Route component={FurnitureDeisgnPage} path="/services/furniture-deisgn" exact />
                    <Route component={CommercialDesignPage} path="/services/commercial-design" exact />

                    <Route component={ErrorPage} path="*" />
                </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
