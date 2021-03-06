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
    },
    registerUser(obj) {
        return fetch(`${baseUrl}register/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=>r.json())
    },
    getUserInfo(token){
        return fetch(`${baseUrl}dater_users?user_info`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `${token}`
            }
        }).then(r=>r.json())
    }
}