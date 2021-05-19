import { BrowserRouter, Route, Switch } from "react-router-dom"

import './assets/styles/styles.scss'

import Footer from "./components/Footer"
import Header from "./components/Header"
import MainPage from "./routes/MainPage"

function App() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route component={MainPage} to="/" />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App