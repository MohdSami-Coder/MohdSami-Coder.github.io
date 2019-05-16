import React from 'react';

import ReactDOM from 'react-dom';

class Products extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3">
                    <h4>Tablets</h4>
                    <hr></hr>
                </div>
                <div className="col-md-3">
                    <h4>Laptops</h4>
                    <hr></hr>
                </div>
                <div className="col-md-3">
                    <h4>Mobiles</h4>
                    <hr></hr>
                </div>                
                <div className="col-md-3">
                    <h4>Glass</h4>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

class Info extends React.Component{
    render() {
        return(
            <div className="row">
                <div className="col-md-3">
                    <figure>
                        <img class="img-fluid" src="tablet.png" alt="tablet device" title="Tablet Devices"></img>
                        <figcaption>A tablet, or tablet PC, is a portable computer that uses a touchscreen as its primary input device. Most tablets are slightly smaller and weigh less than the average laptop. While some tablets include fold out keyboards, others, such as the Apple iPad and Motorola Xoom, only offer touchscreen input.</figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure>
                        <img class="img-fluid" src="laptop.png" alt="tablet device" title="Laptops"></img>
                        <figcaption>If you want to play modern games or use a VR headset such as an HTC Vive or Oculus Rift, your three or four year old laptop clearly won't cut it. You need a gaming rig with one of Nvidia's Pascal chips. Look for a laptop that has an Nvidia GTX chip with a 10 at the beginning of its model number. Ranging from the GTX 1050 on the low end to the GTX 1080 on the high end, Pascal chips allow you  to play AAA games at desktop-class frame rates with the settings turned up. Even the least powerful of these can handle high-end VR applications with ease. Don't even consider buying a gaming rig without Pascal.</figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure>
                        <img class="img-fluid" src="mobile.png" alt="tablet device" title="Mobiles"></img>
                        <figcaption>The games on cell phones are becoming progressively more enticing due to more interactive features. There’s a new game that has been making its rounds on the internet that includes your voice like in a simplistic game called Chicken Scream. Augmented reality like in Pokémon Go created a highly popular phone game that allowed millions of user to get in on the action.</figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure>
                        <img class="img-fluid" src="glass.png" alt="tablet device" title="Glass"></img>
                        <figcaption>The MyGlass companion app lets you set up Glassware, screencast and other features. It's available for Android and iOS. MyGlass for Android requires Android 4.0.3 (Ice Cream Sandwich) or higher. MyGlass for iOS requires iOS 7 or later (iPhone 4 and above, iPad 2 and above with cellular connection). Glass can be used as a Bluetooth headset with any Bluetooth compatible phone.</figcaption>
                    </figure>
                </div>

            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1 className="display-2">TreeTop Inc</h1>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

class Navbar extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">

                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">TreeTop Inc</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                    
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="bootstrap.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Aboutus.html">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Contactus.html">Contact Us</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="containder-fluid">
                
                <Navbar />
                <Title />
                <Products />
                <Info />
            </div>
        )
    }
}


ReactDOM.render( <App />, document.getElementById('root') );