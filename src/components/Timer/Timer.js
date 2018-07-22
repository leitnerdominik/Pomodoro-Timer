import React, { Component } from 'react';

import { formatTime } from '../../util/timeUtil';

const Timer = (props) => {
    
    const displayTime = formatTime(props.sec);
    return (
      <div className="timer">
        <span className="minutes">{displayTime.min}</span>
        :
        <span>{displayTime.sec}</span>
      </div>
    );
}

export default Timer;