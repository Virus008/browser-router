import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h3>Hello,</h3>
                    <p>This is home page.</p>
                </div>
                <div className="page-content">
                    <h5>Browser Router</h5>
                    <ul>
                        <li>A router for modern browsers which user HTML5 pushState API.</li>
                        <li>Routes as normal URL in a browser.</li>
                        <li>Server handles all the URL request and it points to root index.html</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;