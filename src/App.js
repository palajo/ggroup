import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/styles/styles.scss'

import Header from './components/Header';
import Footer from './components/Footer';

import MainPage from './routes/MainPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route component={MainPage} path="/" exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
