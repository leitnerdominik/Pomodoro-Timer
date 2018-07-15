import React, { Component } from "react";

import '../styles/App.css';

import Timer from './Timer/Timer';
import ButtonControl from './ButtonControl/ButtonControl';
import ButtonOptions from './ButtonOptions/ButtonOptions';

class App extends Component {

    state = {
        min: '00',
        sec: '00',
        playing: false,
      };

    duration(sec) {
        let minutes = parseInt(sec / 60, 10);
        let seconds = parseInt(sec % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        this.setState({min: minutes, sec: seconds});
    }

    render() {
        return (
            <div>
                <ButtonOptions duration={this.duration.bind(this)} />
                <Timer min={this.state.min} sec={this.state.sec} />
                <ButtonControl />
            </div>
        );
    }
}

export default App;