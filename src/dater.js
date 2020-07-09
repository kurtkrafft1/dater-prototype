import React, {useState} from "react"
import ApplicationViews from "./ApplicationViews";
import Sidebar from "./components/navbar"

const Dater = props => {
    const isAuthenticated = () => sessionStorage.getItem("token") !== null;
    const [hasUser, setHasUser] = useState(isAuthenticated());
    const clearUser = () => {
        sessionStorage.clear();
        setHasUser(false);
      };


      return (
          <>
            <Sidebar />
            <ApplicationViews />
            <h1>Hi</h1>
          </>
      )
}

export default Dater