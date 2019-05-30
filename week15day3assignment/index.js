import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';

import {Provider, connect} from 'react-redux';

let counterReducer = function(oldState, action){

    let newState = { counter: 0 };

    if(!oldState) { return newState };

    if(action.type == "INCREMENT"){
        newState.counter = oldState.counter + 1;
    }

    if(action.type == "DECREMENT"){
        newState.counter = oldState.counter - 1;
    }

    if(action.type == "RESET"){
        newState.counter = 0;
    }

    return newState;
}

let counterStore = createStore(counterReducer);

counterStore.subscribe(function(){
    
    console.log( counterStore.getState() );
})

function counterStoreMapper(state){
    return state;
}


class IncrementComponent extends React.Component{

    constructor(props){
        super(props);
    
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "INCREMENT"
        })
    }

    render(){
        return(
            <button onClick={this.buttonClicked}>+</button>
        )
    }
}
let Increment = connect(counterStoreMapper)(IncrementComponent);



class DecrementComponent extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "DECREMENT"
        })
    }

    render(){
        return(
            <button onClick={this.buttonClicked} >-</button>
        )
    }
}
let Decrement = connect(counterStoreMapper)(DecrementComponent);

class ResetComponent extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        this.props.dispatch({
            type: "RESET"
        })
    }
    
    render(){
        return(
            <button onClick={this.buttonClicked} >Reset</button>
        )
    }
}
let Reset = connect(counterStoreMapper)(ResetComponent);

class DisplayComponent extends React.Component{
    render(){
        return(
            <h2>Counter: {this.props.counter}</h2>
        )
    }
}
let Display = connect(counterStoreMapper)(DisplayComponent);


class App extends React.Component{
    render(){
        return(
            <Provider store={counterStore}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <Display />
                            <Increment />
                            <Decrement />
                            <Reset />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('root') );