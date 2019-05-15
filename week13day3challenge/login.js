import React from 'react';
import ReactDOM from 'react-dom';
import { extname } from 'path';

class User extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label>Username</label>
                <input type="email" className="form-control"></input>
            </div>
        )
    }
}

class Password extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"></input>
            </div>
        )
    }
}

class Button extends React.Component{
    render(){
        return <button type="submit" className="btn btn-info">Login</button>
    }
}

class Login extends React.Component{
    render() {
        return <h1>Login</h1>
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 offset-md-4">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Login />
                        <hr></hr>
                        <User />
                        <Password />
                        <Button />
                    </div>
                </div>
            </div>

        )
    }
}

ReactDOM.render( <App />, document.getElementById('root') );