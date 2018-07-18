import React, { Component } from 'react';

const Timer = (props) => {
  
    return (
      <div className="timer">
        <span className="minutes">{props.min}</span>
        :
        <span>{props.sec}</span>
      </div>
    );
}

export default Timer;