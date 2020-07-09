import React, {useState} from "react"
import ApplicationViews from "./ApplicationViews";
import Navbar from "./components/navbar/navbar"
import "./dater.css"

const Dater = props => {
    const isAuthenticated = () => sessionStorage.getItem("token") !== null;
    const [hasUser, setHasUser] = useState(isAuthenticated());
    const clearUser = () => {
        sessionStorage.clear();
        setHasUser(false);
      };


      return (
          <>
          
            {hasUser? <Navbar /> : ""}
            <ApplicationViews hasUser={hasUser} setHasUser={setHasUser} clearUser={clearUser}  {...props}/>
          </>
      )
}

export default Dater