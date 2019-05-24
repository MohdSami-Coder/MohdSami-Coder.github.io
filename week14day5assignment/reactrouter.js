import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">

                            <h2>React Router</h2>
                            <hr />

                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/aboutus">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contactus">Contact Us</Link>
                                </li>
                            </ul>

                            <Route path="/" exact={true} component={Home} />
                            <Route path="/aboutus" component={AboutUs} />
                            <Route path="/contactus" component={ContactUs} />


                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

class Home extends React.Component{
    render(){
        return(
            <div className="row">
                <p>Welcome to my Home Page</p>
            </div>
        )
    }
}

class AboutUs extends React.Component{
    render(){
        return(
            <div className="row">
                <p>This page is dedictated to the Founders</p>
            </div>
        )
    }
}

class ContactUs extends React.Component{
    render(){
        return(
            <div className="row">
                <p>For more info Contact us at: </p>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root') );