import React from "react";
import { useState } from "react";

const Try = ({ ele, idx }) => {
    return (
        <li>
            <div>{idx+1}차 시도: {ele}</div>
        </li>
    )
}

export default Try;