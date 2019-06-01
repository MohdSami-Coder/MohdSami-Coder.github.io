import React from 'react';
import {connect} from 'react-redux';

import {storeMapper, store} from './store.js'

class CubeComponent extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "CUBE"
        })
    }

    render(){
        return(
            <button onClick={this.buttonClicked} className="btn btn-info">Cube</button>
        )
    }
}

let Cube = connect(storeMapper)(CubeComponent);

export {Cube};