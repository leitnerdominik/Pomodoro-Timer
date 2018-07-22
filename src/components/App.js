import React, { Component } from "react";
import Push from 'push.js';

import '../styles/App.css';

import Timer from './Timer/Timer';
import ButtonControl from './ButtonControl/ButtonControl';
import ButtonOptions from './ButtonOptions/ButtonOptions';
import pomodoroIcon from '../images/icon.png';
import soundFile from '../assets/audio.mp3';
import { pomodoroBreak, formatTime } from '../util/timeUtil';



class App extends Component {

    state = {
        sec: pomodoroBreak,
        initTime: pomodoroBreak,
        playing: false,
      };
    
    sound = new Audio(soundFile);


    componentDidMount() {  
        Push.Permission.request();
    }

    componentDidUpdate() {
        this.setBrowserTitle();
    }

    setBrowserTitle() {
        const titleTime = formatTime(this.state.sec);
        document.title = `${titleTime.min}:${titleTime.sec}`;
    }
    
    setDuration(sec) {
        this.setState({
            sec: sec,
            initTime: sec,
            playing: false,
        });

        this.stopTimer();
    }

    handlePushNotification() {
        Push.create('Pomodoro Timer', {
            body: 'Time is over !',
            icon: {x32: pomodoroIcon},
            timeout: 5000,
            onClick: () => {
                this.stopSound();
            },
            onClose: () => {
                this.stopSound();
            }
        });
    }

    stopSound() {
        window.focus();
        this.sound.pause();
    }

    startTimer() {
        let duration = this.state.sec;
        if(!this.state.playing) {
            this.setState({playing: true});
            this.timer = setInterval(() => {
                
                if(--duration >= 0) {
                    this.setState({sec: duration});
                } else {
                    this.handlePushNotification();
                    this.sound.play();
                    clearInterval(this.timer);

                    // if(this.state.initTime === pomodoroBreak) {
                    //     this.setDuration(5 * 60);
                    // } else {
                    //     this.setDuration(pomodoroBreak);
                    // }
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({playing: false});
    }

    resetTimer() {
        this.setDuration(this.state.initTime);
    }

    render() {
        return (
            <div>
                <h1>Pomodoro Timer</h1>
                <ButtonOptions duration={this.setDuration.bind(this)} />
                <Timer sec={this.state.sec} />
                <ButtonControl 
                    start={this.startTimer.bind(this)}
                    stop={this.stopTimer.bind(this)}
                    reset={this.resetTimer.bind(this)} />
            </div>
        );
    }
}

export default App;