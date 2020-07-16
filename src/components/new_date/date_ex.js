for(let i = 0; i<3; i++){
    //for the first stop
    console.log(i)
    if(i===0){
        
        //fetch from the google maps api using the location keyword(with replaced spaces)
    
        GMM.getStopTwo({"location": date.location, "keyword": date.stopOne.replace(' ', "+")}).then(obj=> {
            // set the new date to a random result
            debugger
            if(obj.status==="OK"){
                newDate.stop_one = obj["results"][getRandomInt(obj["results"].length)]
            }
            else{
                // console.log(obj, 'stop 1')
                GMM.getStopTwo({"location": date.location, "keyword": 'park'}).then(obj=> {
                    newDate.stop_one = obj["results"][getRandomInt(obj["results"].length)]
                })
            }
            
        })
    }
    // for the second stop
    if(i===1){
        GMM.getStopTwo({"location": date.location, "keyword": date.stopTwo.replace(' ', "+")}).then(obj=> {
            // set the new date to a random result
            debugger
            if(obj.status === 'OK'){
                // console.log(obj)
                newDate.stop_two = obj["results"][getRandomInt(obj["results"].length)]
            }
            else if(diet !== 'just-drinks'){
                GMM.getStopTwo({"location": date.location, "keyword": 'food'}).then(obj=> {
                    newDate.stop_two = obj["results"][getRandomInt(obj["results"].length)]
                })
            }
            else if(diet === 'just-drinks'){
                GMM.getStopTwo({"location": date.location, "keyword": 'bar'}).then(obj=> {
                    newDate.stop_two = obj["results"][getRandomInt(obj["results"].length)]
                })
            }
    
            
        })
    }
    // for the third stop
    if(i===2 || date.stopThree !== ""){
        GMM.getStopTwo({location: date.location, keyword: date.stopThree}).then(obj=> {
            debugger
            if(obj.status === "OK"){
                newDate.stop_three = obj["results"][getRandomInt(obj["results"].length)]
                setCompDate(newDate)
                setIsLoading(false)
            }
            else {
                newDate.stop_three = {}
                setCompDate(newDate)
                setIsLoading(false)
            }
            // set completed new date with google map objects to state
            // console.log(newDate)
            
            //set loading to false
            
        })
    }
}