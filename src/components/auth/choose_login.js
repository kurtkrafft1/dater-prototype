import React, {useState, useEffect} from 'react'
import "./login.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const ChooseLogin = props => {
    firebase.initializeApp({
        apiKey: "AIzaSyCzvwzt_1Hq7n10rEVBAZ0dmHtsz0_4CrI",
        authDomain: "dater-385dc.firebaseapp.com"
    })

    const [isSignedIn, setIsSignedIn] = useState(false)

    const uiConfig ={
        signInFlow: "redirect",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult:()=> false
        }
    }

    useEffect(()=> {
        
        firebase.auth().onAuthStateChanged(user=> {
            setIsSignedIn(!!user)
        })
    },[])
    

    return (
        <>
        <div className="email-choice">
        <h1 className="datr-title add-right">Datr</h1>

        <div className="email-button" onClick={()=> props.history.push('email_login')}>
            <span>Email Sign in</span>
        </div>
            
        </div>
        <div className="facebook-choice">
            <div className="fb-holder">
            <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            />
            </div>
            <div className="copyright">
                <span>&copy; Krafft_Devs</span> <span>&</span> <span><a href="#" className="TnC">Terms and Conditions</a></span>
            </div>
       
        </div>
        
        </>
    )
}

export default ChooseLogin