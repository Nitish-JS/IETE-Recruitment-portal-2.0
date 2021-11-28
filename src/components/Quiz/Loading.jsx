import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return(
        <div className="loading" style={{ padding: "25% 10%", width: "10%", marginLeft: "20%" }}>
            <h1 style={{ color: "white" }}>Loading</h1>
            <ReactLoading type={'bubbles'} color={"#009254"} height={300} width={100} />
        </div>
    )
}

export default Loading;