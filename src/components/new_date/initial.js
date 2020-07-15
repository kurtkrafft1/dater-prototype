import React, {useState, useEffect} from 'react'

const Initial = props => {

    return (
        <>
        <div className="welcome-header primary-color marg-bottom"><h4>Please answer a few questions to optimize your date</h4></div>
            <div className="question-card view-card">
                <h3 className="question">What Time Of Day?</h3>
                <div className="submit-btn secondary-btn" onClick={()=> {props.setInitial(false); props.setTime("breakfast")}}>
                    <span>Morning</span>
                </div>
                <div className="submit-btn secondary-btn "  onClick={()=> {props.setInitial(false); props.setTime("lunch")}}>
                    <span>Noon</span>
                </div>
                <div className="submit-btn secondary-btn "  onClick={()=> {props.setInitial(false); props.setTime("dinner")}}>
                    <span>Night</span>
                </div>
            </div>
        </>
    )
}
export default Initial