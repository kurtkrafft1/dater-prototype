import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './navbar.css'


const Navbar = props => {

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if(!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return (
        <>
           <Menu right>
                
                <NavLink activeClassName="navlink act-link" className="navlink"to="/" isActive={checkActive}>Home</NavLink>
                <NavLink activeClassName="navlink act-link" className="navlink" to="/past_dates">Past Dates</NavLink>
                <NavLink activeClassName="navlink act-link" className="navlink" to="Account">Account</NavLink>
                <NavLink activeClassName="navlink act-link" className="navlink" to="/login">Logout</NavLink>
            </Menu>
            <div className="header">
            <h1 className="datr-title">Datr</h1>
            </div>
        </>
    )
}

export default Navbar