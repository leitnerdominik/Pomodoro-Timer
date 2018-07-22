import React from 'react';

import { shortBreak, longBreak, pomodoroBreak } from '../../util/timeUtil';


const ButtonControl = props => {
    return (
        <div className="options">
            <button onClick={() => props.duration(shortBreak)}>short break</button>
            <button onClick={() => props.duration(pomodoroBreak)}>Pomodoro</button>
            <button onClick={() => props.duration(longBreak)}>long break</button>
        </div>
    )
}

export default ButtonControl;