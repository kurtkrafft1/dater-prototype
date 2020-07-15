import keys from "../keys"

const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
const proxyurl = "https://cors-anywhere.herokuapp.com/";
// 'location=36.1627,-86.7816&radius=1500&keyword=park&key=AIzaSyDYbWxuIdwSGog0qHV2joDY0reDxdPVPaw'
export default {
    getStop(obj){
        return fetch(`${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=AIzaSyDYbWxuIdwSGog0qHV2joDY0reDxdPVPaw`, {
            method: "GET",
            // mode: 'no-cors'
            // headers: {
            //     'Acc'
            // }
        }).then(r=> console.log(r))
    },
    getStopTwo(obj){
        return fetch(proxyurl + `${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=AIzaSyDYbWxuIdwSGog0qHV2joDY0reDxdPVPaw`) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.json())
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
   
}