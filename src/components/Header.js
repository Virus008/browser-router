import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class Header extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                            <a href="/browser-router" className="navbar-brand">Virus08</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav1" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynav1">
                                <div className="navbar-nav">
                                    <a href="/about" className="nav-item nav-link">About</a>
                                    <a href="/contact" className="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <br></br>
                    <div className="content">
                        <Route exact path="/browser-router" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/contact" component={Contact}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Header;
