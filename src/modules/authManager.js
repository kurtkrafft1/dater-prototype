import baseUrl from "./baseUrl"

export default {
    loginUser(obj){
        return fetch(`${baseUrl}login/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=>r.json())
    }
}