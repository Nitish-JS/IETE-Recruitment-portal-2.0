import React from 'react'
import Heading from "./Quiz/instruction/heading";
import Time from "./Quiz/instruction/time";
import Instructions from './Quiz/instruction/instructions';
function ToDo() {
    return (
        <div style={{width:"100%"}}>
            <Heading />
            <Time />
            <Instructions />
        </div>
    )
}

export default ToDo;
