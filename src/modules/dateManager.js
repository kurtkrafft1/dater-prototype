import baseUrl from "./baseUrl"

export default{
    getAllDatesEvenArchived(token){
        // debugger
        return fetch(`${baseUrl}past_dates?all`, {
            method: "GET",
            headers: {
                "Content-Type": "Application/json",
                "Accept": "Application/json",
                "Authorization": `${token}`
            }
        }).then(r=> r.json())
    }
}