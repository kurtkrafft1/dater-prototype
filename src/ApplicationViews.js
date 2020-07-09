import React from 'react'
import { Route, Redirect } from "react-router-dom";
import ChooseLogin from "./components/auth/choose_login"

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setHasUser=props.setHasUser
    const clearUser = props.clearUser

    return (
        <>
        <Route 
        exact path = "/login"
        render ={ props => {
            return <ChooseLogin {...props} />
        }}
        />
        
        </>
    )
}

export default ApplicationViews