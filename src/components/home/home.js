import React, {useState, useEffect} from 'react'
import DM from "../../modules/dateManager"


const Home = props => {
    const [userName, setUserName] = useState()
    const [dates, setDates] = useState()
    const token = sessionStorage.getItem('token')

    useEffect(()=> {
        // debugger
        console.log('hello')
        DM.getAllDatesEvenArchived(token).then(arr=> {
            console.log(arr)
        })
    },[])
    return (
        <div>
            <h1>H1</h1>
        </div>
    )

}
export default Home