import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">            
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1 className="display-2">TreeTop Inc</h1>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <h4>Tablets</h4>
                        <hr />
                    </div>
                    <div className="col-md-3">
                        <h4>Laptops</h4>
                        <hr />
                    </div>
                    <div className="col-md-3">
                        <h4>Mobiles</h4>
                        <hr />
                    </div>                
                    <div className="col-md-3">
                        <h4>Glass</h4>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">

                            <img class="img-fluid" src="tablet.png" alt="tablet device" title="Tablet Devices" />
                            A tablet, or tablet PC, is a portable computer that uses a touchscreen as its primary input device. Most tablets are slightly smaller and weigh less than the average laptop. While some tablets include fold out keyboards, others, such as the Apple iPad and Motorola Xoom, only offer touchscreen input.
                    </div>
                    <div className="col-md-3">
                        
                            <img class="img-fluid" src="laptop.png" alt="tablet device" title="Laptops" />
                            If you want to play modern games or use a VR headset such as an HTC Vive or Oculus Rift, your three or four year old laptop clearly won't cut it. You need a gaming rig with one of Nvidia's Pascal chips. Look for a laptop that has an Nvidia GTX chip with a 10 at the beginning of its model number. Ranging from the GTX 1050 on the low end to the GTX 1080 on the high end, Pascal chips allow you  to play AAA games at desktop-class frame rates with the settings turned up. Even the least powerful of these can handle high-end VR applications with ease. Don't even consider buying a gaming rig without Pascal.
                    </div>
                    <div className="col-md-3">
                        
                            <img class="img-fluid" src="mobile.png" alt="tablet device" title="Mobiles" />
                            The games on cell phones are becoming progressively more enticing due to more interactive features. There’s a new game that has been making its rounds on the internet that includes your voice like in a simplistic game called Chicken Scream. Augmented reality like in Pokémon Go created a highly popular phone game that allowed millions of user to get in on the action.
                    </div>
                    <div className="col-md-3">
                        
                            <img class="img-fluid" src="glass.png" alt="tablet device" title="Glass" />
                            The MyGlass companion app lets you set up Glassware, screencast and other features. It's available for Android and iOS. MyGlass for Android requires Android 4.0.3 (Ice Cream Sandwich) or higher. MyGlass for iOS requires iOS 7 or later (iPhone 4 and above, iPad 2 and above with cellular connection). Glass can be used as a Bluetooth headset with any Bluetooth compatible phone.
                    </div>
                </div>
            </div>
        )
    }
}

class AboutUs extends React.Component{
    render(){
        return(
            <div className="container-fluid">
    
                <br />
                <br />
                
                <div className="row">
        
                    <div className="offset-md-4 col-md-4">
                
                        <h1 className="display-2">About Us</h1>
                        <hr />
                    </div>                                    

                </div>    
        
                <br />
                <br />
        
                <div className="row">
        
                    <div className="offset-md-2 col-md-4">
                    
                        <h4>CEO</h4>
                        <h5>Mohd Sami</h5>
                        <p>Budding MERN Developer. Learnt HTML and CSS. Now learning JavaScript. Would like to build my own website/app when I am done with the Full Stack Web Development course from AttainU.</p>
                    
                    </div>
        
                    <div className="col-md-3">
                        <img src="Leo.png" />        
                    </div>
                    
                </div>
        
                <br />
                <br />
                <br />
        
                <div className="row">
        
                    <div className="offset-md-2 col-md-4">
                        
                        <h4>CTO</h4>
                        <h5>Ansal Mon</h5>
                        <p>Jaage Study, Pyton Developer, Open Source Enthusiast</p>
                                                                        
                    </div>
        
                    <div className="col-md-3">
                        <img src="ansal.png" />        
                    </div>    
        
                </div>    
        
                <br />
        
                <div className="row">
        
                    <div className="offset-md-2 col-md-4">
                            
                        <h4>COO</h4>
                        <h5>Vaibhav Bajpai</h5>
                        <p>GeeksforGeeks, Technical Lead</p>
                                                                            
                    </div>        
        
                    <div className="col-md-3">
                        <img src="vaibhav.png" />        
                    </div>
        
                </div>

            </div>
            

        )
    }
}

class ContactUs extends React.Component{
    render(){
        return(
        <div className="container-fluid">            
            <div className="row">

            <div className="offset-md-4 col-md-4">
        
                <h1 className="display-2">Contact Us</h1>
                <hr />
                                                        
            </div>

        </div>

        <div className="offset-md-2 col-md-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.929419156559!2d77.62950026952207!3d12.972980313785726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1551870768336" allowfullscreen />
        </div>

        <br />
        <br />
        <br />
      

    </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="containder-fluid">

                    <div className="row">
                        <div className="col-md-12">

                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <a className="navbar-brand" href="#">TreeTop Inc</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                            
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/aboutus">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                                        </li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <Route path="/" exact={true} component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactUs" component={ContactUs} />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root') );