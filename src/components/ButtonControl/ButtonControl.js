import React from 'react';


const ButtonOptions = props => {
    return (
        <div className="control">
            <button onClick={props.start}>start</button>
            <button onClick={props.stop}>pause</button>
            <button onClick={props.reset}>reset</button>
        </div>
    )
}

export default ButtonOptions;
