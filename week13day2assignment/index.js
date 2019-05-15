import React from 'react';

import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {

        return <button>Click Me</button>;
    }   
}

var root = document.getElementById("root");
ReactDOM.render( <Welcome />, root );