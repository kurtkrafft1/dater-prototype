import React, {useState, useEffect} from 'react'

const Drinks = props => {

    return (
        <>
            <div className="question-card view-card">
                <h3 className="question">Drinks?</h3>
                <div className="submit-btn secondary-btn " onClick={()=>props.setDrinks('yes')} >
                    <span>Yes</span>
                </div>
                <div className="submit-btn secondary-btn " onClick={()=>props.setDrinks('no')}>
                    <span>No</span>
                </div>
               
            </div>
        </>
    )
}
export default Drinks