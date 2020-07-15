import React, {useState, useEffect} from 'react'

const Diet = props => {

    return (
        <>
            <div className="question-card view-card">
                <h3 className="question">Any Dietary Restrictions?</h3>
                <div className="submit-btn secondary-btn " onClick={()=> props.setDiet("none")}>
                    <span>None</span>
                </div>
                <div className="submit-btn secondary-btn " onClick={()=> props.setDiet("vegan")}>
                    <span>Vegan</span>
                </div>
                <div className="submit-btn secondary-btn " onClick={()=> props.setDiet("vegetarian")}>
                    <span>Vegetarian</span>
                </div>
                <div className="submit-btn secondary-btn " onClick={()=> props.setDiet("just-drinks")}>
                    <span>Just Drinks</span>
                </div>
            </div>
        </>
    )
}
export default Diet