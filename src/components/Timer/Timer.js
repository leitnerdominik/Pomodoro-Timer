import React, { Component } from 'react';

class Timer extends Component {
  
  state = {
    min: 0,
    sec: 0,
  };

  render() {
    return (
      <div>
        <span>{this.state.min}</span>
        :
        <span>{this.state.sec}</span>
      </div>
    );
  }
}

export default Timer;