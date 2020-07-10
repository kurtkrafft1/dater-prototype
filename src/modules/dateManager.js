import baseUrl from "./baseUrl"

export default{
    getAllDatesEvenArchived(token){
        // debugger
        return fetch(`${baseUrl}past_dates?count`, {
            method: "GET",
           
            headers: {
                "Accept": "Application/json",
                // "Access-Control-Expose-Headers": "Token",
                // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Token": `${token}`
            }
        }).then(r=> {
            console.log(r)
            r.json()})
    }
}