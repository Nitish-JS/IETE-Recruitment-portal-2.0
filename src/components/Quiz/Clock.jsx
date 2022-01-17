import React,{useState, useEffect} from 'react';
import EndQuiz from './EndQuiz';
import {Link, Redirect} from 'react-router-dom';

let token = "";

try{
    token="Bearer "+JSON.parse(localStorage.getItem('token')).jwt;
} catch (error) {
    console.log(error);
}

const Clock = (props) =>  {
    const [seconds, setSeconds] = React.useState();

    useEffect(async () => {
        await fetch(
            "https://recportal-iete.herokuapp.com/auth/q/",
            {
                method: "POST",
                headers: { "Authorization":token, "Content-Type": "application/json" },
                body: JSON.stringify({
                    domain: localStorage.getItem("domain")
                }),
                
            }
        )
        .then(response => response.json())
        .then(json => {
            console.log("RESPONSE: ",json);
            setSeconds(json.totalduration * 60);
        })
    },[])

    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            // return <Redirect to="/endquiz" />
            props.handleClock();
            setSeconds('TIME OVER!');
            
        }
    });

    // const time = (sec) => {
    //     if (sec > 0) {
    //         setTimeout(() => setSeconds(seconds - 1), 1000);
    //         time(sec-1);
    //     } else {
    //         // return <Redirect to="/endquiz" />
    //         setSeconds('TIME OVER!');
            
    //     }
    // };

    // if (seconds === 'TIME OVER'){
    //     return <Redirect to="/endquiz" />

    // }

    return (
        <div>
            <h1 style={{ color: "white", background: "#009254", textAlign: "center", margin: "10%", padding: "7%", borderRadius: "20px" }}>{Math.floor(seconds/60)} : {(seconds%60)}</h1>
            {/* <h1 style={{ color: "white" }}>Clock</h1> */}
        </div>
    )
}

export default Clock
