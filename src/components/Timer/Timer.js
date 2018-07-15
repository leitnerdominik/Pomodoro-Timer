import React, { Component } from 'react';

const Timer = (props) => {
  
  const style = {
    fontSize:'5rem',
  }
    return (
      <div style={style}>
        <span>{props.min}</span>
        :
        <span>{props.sec}</span>
      </div>
    );
}

export default Timer;