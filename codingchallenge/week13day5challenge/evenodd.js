import React from 'react';
import ReactDOM from 'react-dom';

class EvenCheck extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            number: "",
            result: ""

        }
        this.inputInfo = this.inputInfo.bind(this);
        this.checkBtn = this.checkBtn.bind(this);
    }

    inputInfo(event){
        this.setState({
            number: parseInt(event.target.value)

        })
    }

    checkBtn(){
        var number = this.state.number;

        number % 2 == 0
        ?this.setState({result: "Even"})
        :this.setState({result: "Odd"})

    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <p></p>
                        <h3>Enter a Number to Check if Even or Odd</h3>
                        <hr />
                        <br />
                        <input type="number" className="form-control" onChange={this.inputInfo} />
                        <p></p>
                        <h3>{this.state.result}</h3>
                        <button className="btn btn-primary" onClick={this.checkBtn} >Check</button>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render( <EvenCheck />, document.getElementById('root') );