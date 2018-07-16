import React, { Component } from "react";

import '../styles/App.css';

import Timer from './Timer/Timer';
import ButtonControl from './ButtonControl/ButtonControl';
import ButtonOptions from './ButtonOptions/ButtonOptions';

class App extends Component {

    state = {
        sec: 0,
        initTime: 0,
        playing: false,
      };

    setDuration(sec) {
        this.setState({
            sec: sec,
            initTime: sec
        });

        this.stopTimer();
    }

    formatSeconds(sec) {
        let minutes = parseInt(sec / 60, 10);
        let seconds = parseInt(sec % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return {
            sec: seconds,
            min: minutes,
        }
    }

    startTimer() {
        let duration = this.state.sec;
        this.timer = setInterval(() => {
            
            if(--duration >= 0) {
                this.setState({sec: duration});
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setDuration(this.state.initTime);
    }

    render() {
        const timeObj = this.formatSeconds(this.state.sec);
        return (
            <div>
                <ButtonOptions duration={this.setDuration.bind(this)} />
                <Timer min={timeObj.min} sec={timeObj.sec} />
                <ButtonControl 
                    start={this.startTimer.bind(this)}
                    stop={this.stopTimer.bind(this)}
                    reset={this.resetTimer.bind(this)} />
            </div>
        );
    }
}

export default App;