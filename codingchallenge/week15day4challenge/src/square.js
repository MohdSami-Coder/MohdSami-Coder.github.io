import React from 'react';
import {connect} from 'react-redux';

import {storeMapper, store} from './store.js'

class SquareComponent extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "SQUARE"

        })
    }

    render(){
        return(
            <button onClick={this.buttonClicked} className="btn btn-info">Square</button>
        )
    }
}

let Square = connect(storeMapper)(SquareComponent);

export {Square};