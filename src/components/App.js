import React, { Component } from "react";

import '../styles/App.css';

import Timer from './Timer/Timer';

class App extends Component {
    render() {
        return (
            <div>
                <Timer />
            </div>
        );
    }
}

export default App;