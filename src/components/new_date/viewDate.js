import React, {useState, useEffect} from 'react'

const ViewDate = props => {

    return (
        <>
            <div className="question-card view-card">
                <div className="submit-btn secondary-btn " onClick={()=> {props.setDateView("full");props.createDate(); props.setIsViewing(true)}}>
                    <span>View Full Date</span>
                </div>
                <div className="submit-btn secondary-btn " onClick={()=> {props.setDateView("step");props.createDate(); props.setIsViewing(true)}}>
                    <span>Roll The Dice</span>
                </div>
            </div>
        </>
    )
}
export default ViewDate