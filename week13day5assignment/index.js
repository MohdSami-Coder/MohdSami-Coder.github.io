import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{

    constructor(props){
        super(props)

        this.state = {

            number1: 0,
            number2: 0,
            result: ""
        }
        this.number1Change = this.number1Change.bind(this);
        this.number2Change = this.number2Change.bind(this);
        this.additionHandler = this.additionHandler.bind(this);
        this.minusHandler = this.minusHandler.bind(this);
        this.mulHandler = this.mulHandler.bind(this);
        this.divHandler = this.divHandler.bind(this);
    }

    number1Change(event){
        this.setState({
            number1: parseInt(event.target.value)
        })
    }

    number2Change(event){
        this.setState({
            number2: parseInt(event.target.value) 
        })
    }

    additionHandler(){
        var number1 = this.state.number1;
        var number2 = this.state.number2;

        this.setState({
            result: number1 + number2
        })
    }

    minusHandler(){
        var number1 = this.state.number1;
        var number2 = this.state.number2;

        this.setState({
            result: number1 - number2
        })
    }

    mulHandler(){
        var number1 = this.state.number1;
        var number2 = this.state.number2;

        this.setState({
            result: number1 * number2
        })
    }

    divHandler(){
        var number1 = this.state.number1;
        var number2 = this.state.number2;

        this.setState({
            result: number1 / number2
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        
                        <h3>Calculator</h3>
                        <hr></hr>
                        
                        <label>
                            <input onChange={this.number1Change} type="number" className="form-control" />
                        </label>
                        <br />
                        <label>
                        <input onChange={this.number2Change} type="number" className="form-control" />
                        </label>
                        <br />
                        <h4>{this.state.result}</h4>
                        <button onClick={this.additionHandler} className="btn btn-info">+</button>
                        <button onClick={this.minusHandler} className="btn btn-info">-</button>
                        <button onClick={this.mulHandler} className="btn btn-info">X</button>
                        <button onClick={this.divHandler} className="btn btn-info">/</button>
                    </div>
                </div>


            </div>
        )
    }
}

ReactDOM.render( <Calculator />, document.getElementById('root') );