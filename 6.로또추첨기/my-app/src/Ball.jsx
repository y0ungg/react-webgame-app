import React from "react";

export const Ball = ({number}) => {
    let cn;
    
    if(number <= 10) cn = 'red';
    else if(number <= 20) cn = 'orange';
    else if(number <= 30) cn = 'yellow';
    else if(number <= 40) cn = 'blue';
    else {cn = 'green'};

    return (
        <span className={`ball ${cn}`}>{number}</span>
    )   
};