import React, {useState, useEffect} from 'react';
import DateCard from "./datecard"

const DateView = props => {
    
    return(
        <>
        <div className="date-holder">
            {Object.values(props.date).map(obj=> (
                <DateCard obj={obj} key={1} />
            ))}
        </div>
        </>
    )
}
export default DateView