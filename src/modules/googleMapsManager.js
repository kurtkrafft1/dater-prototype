import keys from "../keys"

const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
    getStop(obj){
        return fetch(`${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=${keys.google_two}`, {
            method: "GET",
            // mode: 'no-cors'
            // headers: {
            //     'Acc'
            // }
        }).then(r=> console.log(r))
    },
    getStopTwo(obj){
        return fetch(proxyurl + `${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=${keys.google_two}`) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.json())
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
   
}