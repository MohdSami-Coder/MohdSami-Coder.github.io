import React from 'react';

import {Provider} from 'react-redux';

import {Input} from './input.js';
import {Square} from './square.js';
import {Cube} from './cube.js';
import {SQRT} from './sqrt.js';
import {Display} from './display.js';
import {store} from './store.js';


class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>Number App</h2>
                        <hr/>
                        
                        <Provider store={store}>
                            <Input />
                            <br/>
                            <Square />
                            <Cube />
                            <SQRT />
                            <Display />
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}

export {App};