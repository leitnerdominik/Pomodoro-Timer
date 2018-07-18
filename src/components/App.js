import React, { Component } from "react";
import Push from 'push.js';

import '../styles/App.css';

import Timer from './Timer/Timer';
import ButtonControl from './ButtonControl/ButtonControl';
import ButtonOptions from './ButtonOptions/ButtonOptions';
import pomodoroIcon from '../images/icon.png';
import soundFile from '../assets/audio.mp3';



class App extends Component {

    state = {
        sec: 25 * 60,
        initTime: 25 * 60,
        playing: false,
      };
    
    sound = new Audio(soundFile);

    
    componentDidMount() {
        Push.Permission.request();
    }

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

    handlePushNotification() {
        Push.create('Pomodoro Timer', {
            body: 'Time is over !',
            icon: {x32: pomodoroIcon},
            timeout: 5000,
            onClick: () => {
                window.focus();
                this.sound.pause();
            }
        });
    }

    startTimer() {
        let duration = this.state.sec;
        this.timer = setInterval(() => {
            
            if(--duration >= 0) {
                this.setState({sec: duration});
            } else {
                this.handlePushNotification();
                this.sound.play();
                clearInterval(this.timer);
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
                <h1>Pomodoro Timer</h1>
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