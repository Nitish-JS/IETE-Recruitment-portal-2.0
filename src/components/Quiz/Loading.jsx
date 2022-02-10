import React from "react";
import ReactLoading from "react-loading";

const Loading = (styles) => {
  return (
    <div className="loading" style={styles}>
      <h1 style={{ color: "white" }}>Loading</h1>
      <ReactLoading
        type={"bubbles"}
        color={"#009254"}
        height={300}
        width={100}
      />
    </div>
  );
};

export default Loading;
