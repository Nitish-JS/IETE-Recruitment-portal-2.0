import React,{useState, useEffect} from 'react';
<<<<<<< HEAD

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
=======
import EndQuiz from './EndQuiz';
import {Link, Redirect} from 'react-router-dom';

let token = "";

try{
    token="Bearer "+JSON.parse(localStorage.getItem('token')).jwt;
} catch (error) {
    console.log(error);
}

const Clock = () =>  {
    const [seconds, setSeconds] = React.useState();

    useEffect(async () => {
        await fetch(
            "https://recportal-iete.herokuapp.com/auth/q/",
            {
                method: "POST",
                headers: { "Authorization":token, "Content-Type": "application/json" },
                body: JSON.stringify({
                    domain: 1
                }),
                
            }
        )
        .then(response => response.json())
        .then(json => {
            setSeconds(json.totalduration * 60);
        })
    },[])

    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            // return <Redirect to="/endquiz" />
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
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            {/* <h1 style={{ color: "white" }}>Clock</h1> */}
        </div>
    )
}

export default Clock
