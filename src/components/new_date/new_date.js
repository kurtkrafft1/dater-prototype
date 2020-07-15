import React, {useState, useEffect} from 'react'
import GMM from "../../modules/googleMapsManager"
import Initial from "./initial"
import Diet from "./diet"
import Drinks from "./drinks"
import ViewDate from "./viewDate"
import DateView from "./dateView"
import "./newdate.css"
import DOM from "../../modules/dateOptionsManager"


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


const NewDate = props => {

    const [isInitial, setIsInitial] = useState(true)
    const [time, setTime] = useState(null)
    const [diet, setDiet] = useState(null)
    const [drinks, setDrinks] = useState(null)
    const [dateView, setDateView] = useState(null)
    const [isViewing, setIsViewing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [ stops, setStops] = useState({})
    const [compDate, setCompDate] = useState({})
    const lat = '36.1627'
    const lng = '-86.7816'

    useEffect(()=> {
        
    },[])

    const createDate = () => {
        setIsLoading(true)
        //create a date that has empty stops and the 'users' location 
        const date = {
            'stopOne': "",
            'stopTwo': "",
            'stopThree': "",
            'location': `${lat},${lng}`
        }
        //fetch all of the potential date options
        DOM.getDateOptions().then(arr=> {
            // iterate up to 3 cause thats how many stops we will have
           for(let i = 0; i<3; i++){
               //check to see that the user didnt select Just Drinks
            if(diet!== 'just-drinks'){
                //for the first stop
                if(i===0){
                    //get a random stop from date options
                    let stop = arr[getRandomInt(arr.length)]
                    //check to see that the stop isn't breakfast lunch or dinner (7,8,10)
                    if(stop.id === 7 || stop.id === 8 || stop.id ===10){
                        stop = arr[getRandomInt(arr.length)]
                    }else {
                        //check to see if the time fo the date is break fast and if the selected id is bars that might not be a good idea
                        if(time ==="breakfast" && stop.id === 4){
                            stop = arr[getRandomInt(arr.length)]
                        }else {
                            //set stop one to this. (may add desert filter as well)
                            date['stopOne'] = `${stop.name}`
                        }
                        
                    }
                    
                }
                //for the Second Stop (always going to be food)
                if(i===1 && diet !=='none'){
                    //check to see if they selected a dietary restriction and then add that to the stop two
                    date['stopTwo'] = `${diet} ${time}`
                }else if (i===1 && diet ==='none') {
                    //if none was selected we just set it to the time
                    date['stopTwo'] = `${time}`
                }
                //for the Third Stop
                if(i===2){
                    //very similar to stop one where we check the selected date option 
                    let stop = arr[getRandomInt(arr.length)]
                    //is it food?
                    if(stop.id === 7 || stop.id === 8 || stop.id ===10){
                        stop = arr[getRandomInt(arr.length)]
                    }else {
                        //check to see if they want drinks and id they haven't already had them
                        if(drinks === 'yes' && date['stopOne'] !== 'Bars'){
                            //if drinks is selected 
                            date['stopThree'] = `bars`
                        } else {
                            //they don't want drinks thats fine we will get something else 
                            if(stop.id === 4){
                                stop = arr[getRandomInt(arr.length)]
                            }else {
                                //check to see if the user already have this in their potential date
                                if( stop.name === date['stopOne']){
                                    stop = arr[getRandomInt(arr.length)]
                                }else {
                                    // if note we will throw it in there
                                    date['stopThree'] = `${stop.name}`
                                }
                                
                            }
                        }
                        
                    }
                }
                
            } else {
                //So they selected just drinks then we will simplify it and only have two stops
                if(i===0){
                    //get random stop
                    let stop = arr[getRandomInt(arr.length)]
                    if(stop.id === 7 || stop.id === 8 || stop.id ===10){
                        stop = arr[getRandomInt(arr.length)]
                    }else {
                        //bars will be the second option so we don't want it twice
                        if(stop.id === 4 ){
                            stop = arr[getRandomInt(arr.length)]
                        }else {
                            //set that date option
                            date['stopOne'] = `${stop.name}`
                        }

                    }
                    
                } 
                if (i===1){
                    // for the second stop we will automatically make it bars
                    date['stopTwo'] = 'bars'
                }
                else{
                    //no third stop
                    date['stopThree'] = ""
                }

            }

           }
            
        }).then(()=> {
            //create the new date for the user
        const newDate = {
            'stop_one': {},
            'stop_two': {},
            'stop_three': {}
        }
        for(let i = 0; i<3; i++){
            //for the first stop
            if(i===0){
                console.log(date.stopOne.replace(' ', "+"))
                //fetch from the google maps api using the location keyword(with replaced spaces)
                GMM.getStopTwo({"location": date.location, "keyword": date.stopOne.replace(' ', "+")}).then(obj=> {
                    // console.log(obj)
                    // set the new date to a random result
                    newDate.stop_one = obj["results"][getRandomInt(obj["results"].length)]
                })
            }
            // for the second stop
            if(i===1){
                GMM.getStopTwo({location: date.location, keyword: date.stopTwo}).then(obj=> {
                    newDate.stop_two = obj["results"][getRandomInt(obj["results"].length)]
                })
            }
            // for the third stop
            if(i===2 || date.stopThree !== ""){
                GMM.getStopTwo({location: date.location, keyword: date.stopThree}).then(obj=> {
                    newDate.stop_three = obj["results"][getRandomInt(obj["results"].length)]
                    // set completed new date with google map objects to state
                    setCompDate(newDate)
                    //set loading to false
                    setIsLoading(false)
                })
            }
        }
        
        
    })
    }


    if(isLoading){
        return (
            <>
            <div className="loader-holder">
                <div className="loader"></div>
            </div>
        </>
        )
    }else {
        if(isViewing){
            return(
                <>
                  <div className=' add-marg-top'>
                <div className="welcome-user smaller">
                    <DateView date={compDate} type={dateView} refreshDate={createDate}/>
                </div>
                </div>
                </>
            )

        }else {
            return (
                <>
                <div className=' add-marg-top'>
                <div className="welcome-user smaller">
                    {isInitial===true? (
                        <Initial setTime={setTime} setInitial={setIsInitial}/>
                    ): isInitial===false && time !== null & diet===null ? ( <Diet setDiet={setDiet}/>) : isInitial===false && time!==null && diet !== null && drinks === null? ( <Drinks setDrinks={setDrinks}/>) : (<ViewDate setIsViewing={setIsViewing} setDateView={setDateView} createDate={createDate}/>)}
                </div>
                </div>
                </>
            )
        }
        
    }
    
}
export default NewDate