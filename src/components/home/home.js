import React, {useState, useEffect} from 'react'
import DM from "../../modules/dateManager"
import AM from "../../modules/authManager"
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import "./home.css"

const formatter = buildFormatter(englishStrings)


const Home = props => {
    const [dates, setDates] = useState()
    const[numberOfDates, setNumberOfDates] = useState(0)
    const [userInfo, setUserInfo] = useState({})
    const [mostRecentDate, setMostRecentDate] = useState({})
    const [favDates, setFaveDates] = useState(0)
    const [ isLoading, setIsLoading] = useState(true)
    const token = sessionStorage.getItem('token')

    useEffect(()=> {
        setIsLoading(true)
        // get number of dates user has been on
        if(isLoading){
            DM.getAllDatesEvenArchived(token).then(arr=> {
                //total number of dates
                setNumberOfDates(arr.length)
                //get the array in the right order
                arr.reverse()
                //get all the ones that aren't deleted and then get the first and most recent one
                const notDeleted = arr.filter(obj=> obj.deleted === null)
                setMostRecentDate(notDeleted[0])
                //get all the dates that are favorited and get the amount of them
                const favorited = arr.filter(obj => obj.is_favorite === true)
                setFaveDates(favorited.length)
            })
            //getUserInfo
            AM.getUserInfo(token).then(obj=>{
                setUserInfo(obj)}).then(()=> {
                    setIsLoading(false)
                })
        }
        

    },[])
    // if(isLoading){
    //    return ( 
    //    <>
    //         <div className="loader-holder">
    //             <div className="loader"></div>
    //         </div>
    //     </>
    //     )
    // }
    // else{
    return (
        <>
        {isLoading ? (
            <>
            <div className="loader-holder">
                <div className="loader"></div>
            </div>
        </>

        ) : (<div className="home-body">
            <div className="welcome-user">
                <div className="welcome-header">
                    <h1 className="welcome-title">Welcome {userInfo.name.split(" ")[0]} </h1>
                </div>
                <div className='welcome-body'>
                    <div className="top-bodies">
                        <div className="date-number">
                            <i className="users big icon text-shadow"></i>
                            <span>{numberOfDates} date{numberOfDates>1|| numberOfDates===0? "s" : ""}</span>
                        </div>
                        <div className="date-number">
                            <i className="star  big icon"></i>
                            <span>{favDates} favorite{favDates>1|| numberOfDates===0? "s" : ""}</span>
                        </div>
                    </div>
                    <div className="bottom-body">
                        <div className="time-holder">
                        {numberOfDates !== 0 ? (<span className="">Your last date was <span className="underline"><TimeAgo date={mostRecentDate.created_at} formatter={formatter} /></span> </span>) : "" }
                        </div>
                        <div className="submit-btn primary-btn " onClick={()=>props.history.push('/newdate')}>
                            <span>Start a New Date</span>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>)}
        </>
    )

}
export default Home