import React from 'react';
import {connect} from 'react-redux';

import {storeMapper, store} from './store.js'

class SQRTComponent extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "SQRT"
        })
    }

    render(){
        return(
            <button onClick={this.buttonClicked} className="btn btn-info">SQRT</button>
        )
    }
}

let SQRT = connect(storeMapper)(SQRTComponent);

export {SQRT};