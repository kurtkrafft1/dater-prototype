import React from 'react'
import { Route, Redirect } from "react-router-dom";
import ChooseLogin from "./components/auth/choose_login"
import EmailLogin from "./components/auth/login"
import Navbar from "./components/navbar/navbar"
import Register from "./components/auth/register"
import Home from "./components/home/home"
import NewDate from "./components/new_date/new_date"

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setHasUser=props.setHasUser
    const clearUser = props.clearUser

    return (
        <>
        {hasUser? 
        <>
        <Route 
        path=""
        render={
            props=> {
                return <Navbar clearUser={clearUser} {...props}/>
            }
        }/> 
        
        <Route 
        exact path = '/'
        render={
            props=> {
                return <Home {...props} />
            }
        }
        />
        <Route 
        exact path = '/newdate'
        render={
            props=> {
                return <NewDate {...props} />
            }
        }
        />
        </>
        : ""}
        <Route 
        exact path = "/login"
        render ={ props => {
            if(hasUser){
                return <Redirect to="/" />
            }else {
                return <ChooseLogin {...props} />
            }
            
        }}
        />
        <Route
        exact path = "/email_login"
        render={props=> {
            if(hasUser){
                return <Redirect to="/" />
            }else {
                return <EmailLogin {...props} setHasUser={setHasUser}/>
            }
            
        }}
        />
        <Route
        exact path = "/register"
        render={props=> {
            if(hasUser){
                return <Redirect to="/" />
            }else {
                return <Register {...props} setHasUser={setHasUser}/>
            }
            
        }}
        />
        <Route
        path = ""
        render = {
            props => {
                return <Redirect to="/login" />
            }
        }
        />
        
        </>
    )
}

export default ApplicationViews