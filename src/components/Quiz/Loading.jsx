import React from 'react';
import ReactLoading from 'react-loading';

<<<<<<< HEAD
const Loading = () => {
    return(
        <div className="loading" style={{ width: "10%" }}>
=======
const Loading = (styles) => {
    return(
        <div className="loading" style={styles}>
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            <h1 style={{ color: "white" }}>Loading</h1>
            <ReactLoading type={'bubbles'} color={"#009254"} height={300} width={100} />
        </div>
    )
}

export default Loading;