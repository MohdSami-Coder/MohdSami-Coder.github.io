import React from 'react';
import {connect} from 'react-redux';

import {storeMapper, store} from './store.js'

class DisplayComponent extends React.Component{
    render(){
        return(
            <h2>Your Result: {this.props.result}</h2>
        )
    }
}

let Display = connect(storeMapper)(DisplayComponent);

export {Display};