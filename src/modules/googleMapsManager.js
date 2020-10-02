import keys from "../keys"

const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const picUrl = 'https://maps.googleapis.com/maps/api/place/photo?'
// maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

export default {
    getStop(obj){
        console.log(`${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=${keys.google}`)
        return fetch(`${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=${keys.google}`, {
            method: "GET",
            mode: 'no-cors',
            headers: {
                'Access-control-origin': "*"
            }
        }).then(r=> console.log(r))
    },
    getStopTwo(obj){
       
        console.log(`stop: ${obj.stop}, keyword: ${obj.keyword}`)
        return fetch(proxyurl + `${url}location=${obj.location}&radius=1500&keyword=${obj.keyword}&key=${keys.google}`) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.json())
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    },
    getPlacePhoto(ref){
        return fetch(proxyurl + `${picUrl}maxwidth=400&maxheight=200&photoreference=${ref}&key=${keys.google}`) // https://cors-anywhere.herokuapp.com/https://example.com
        // .then(response => response.json())
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
   
}