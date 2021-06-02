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

                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
