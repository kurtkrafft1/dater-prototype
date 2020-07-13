import React, {useState, useEffect} from 'react'
import "./emaillogin.css"
import AM from "../../modules/authManager"

const EmailLogin = props => {
    const [credentials, setCredentials] = useState({"email": "", "password": ""})
    const[errorMessage, setErrorMessage] = useState()

    const handleFieldChange = e => {
        const stateToChange = {...credentials}
        stateToChange[e.target.id] = e.target.value
        setCredentials(stateToChange)
    }

    const handleSubmit = e=> {
        e.preventDefault()
        AM.loginUser(credentials).then(resp=> {
            if(resp.valid===false){

                if(resp.error==="Verify Email"){
                    setErrorMessage("Please Verify Your Email")
                }
                if(resp.error==="Invalid Credentials"){
                    setErrorMessage("Your email or password is incorrect")
                }
            }
            if(resp.valid===true){
            
                sessionStorage.setItem('token', resp.token)
                props.setHasUser(true)
                props.history.push('/')
            }
        })
    }


    return (
        <>
            <div className="header">
            <h1 className="datr-title">Datr</h1>
            </div>
            <div className="email-form">
                <form className="eForm">
                    <br></br>
                <div className="group">      
                    <input type="text" id="email" required  onChange={handleFieldChange}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                </div>
      
                <div className="group no-bottom">      
                    <input type="password" id="password" required onChange={handleFieldChange}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div>
                <div className="btn-holder">
                    <div className="error-holder">
                        {errorMessage? (<span>*{errorMessage}</span>) : ""}
                    </div>
                <div className="submit-btn primary-btn" onClick={handleSubmit}>
                    <span>Log In</span>
                </div>
                <div className="icons-container">
                <i className="arrow left icon"></i>
                <span className="underline" onClick={()=> props.history.push('/register')}>Sign Up</span>
                </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default EmailLogin