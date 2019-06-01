import React from 'react';
import {connect} from 'react-redux';

import {storeMapper, store} from './store.js'

class InputComponent extends React.Component{

    constructor(props){
        super(props);

        this.numberChange = this.numberChange.bind(this);
    }

    numberChange(event){
        this.props.dispatch({
            type: "NUMBER CHANGE",
            number: event.target.value
        })
    }

    render(){
        return(
            <label>
                <input onChange={this.numberChange} className="form-control" type="number" />
            </label>

        )
    }
}

let Input = connect(storeMapper)(InputComponent);

export {Input};