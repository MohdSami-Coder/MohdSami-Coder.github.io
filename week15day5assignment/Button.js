import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.dispatch({
            type: "FETCH_PICTURES",
            breedName: this.props.breedName
        });
    }

    render() {
        return <button onClick={this.buttonClicked} className="btn btn-secondary">{this.props.breedName}</button>
    }
}


let Button = connect(storeMapper)(ButtonComponent);


export {Button};