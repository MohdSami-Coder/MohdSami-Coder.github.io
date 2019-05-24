import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            inputText: ""
        }
        this.updateTextInput = this.updateTextInput.bind(this);
    }

    updateTextInput(newValue){
        this.setState({
            inputText: newValue
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>React State Lifting</h2>
                        <hr />
                        <InputComponent updateTextInput={this.updateTextInput} />
                        <p></p>
                        <DisplayComponent inputText={this.state.inputText} />
                    </div>
                </div>
            </div>
        )
    }
}

class InputComponent extends React.Component{

    constructor(props){
        super(props);

        this.inputChanged = this.inputChanged.bind(this);

    }

    inputChanged(event){
        this.props.updateTextInput(event.target.value);

    }

    render(){
        return(
            <input type="text" className="form-control" onChange={this.inputChanged}/>
        )
    }
}

class DisplayComponent extends React.Component{
    render(){
        return(
            <h3>{this.props.inputText}</h3>
        )
    }

}

ReactDOM.render( <App />, document.getElementById('root') );