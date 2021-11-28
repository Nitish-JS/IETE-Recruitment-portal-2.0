import React,{useState, useEffect} from 'react';

const Clock = () =>  {
    const [seconds, setSeconds] = React.useState(60);

    React.useEffect(() => {
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
        setSeconds('TIME OVER!');
        }
    });

    return (
        <div>
            <h1 style={{ color: "white", background: "#009254", textAlign: "center", margin: "10%", padding: "7%", borderRadius: "20px" }}>{seconds}</h1>
            {/* <h1 style={{ color: "white" }}>Clock</h1> */}
        </div>
    )
}

export default Clock
