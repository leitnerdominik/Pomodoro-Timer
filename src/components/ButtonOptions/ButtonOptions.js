import React from 'react';


const ButtonControl = props => {
    return (
        <div className="options">
            <button onClick={() => props.duration(5 * 60)}>short break</button>
            <button onClick={() => props.duration(25 * 60)}>Pomodoro</button>
            <button onClick={() => props.duration(10 * 60)}>long break</button>
        </div>
    )
}

export default ButtonControl;