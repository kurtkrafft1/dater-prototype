import baseUrl from "./baseUrl"

export default {
    getDateOptions() {
        return fetch(`${baseUrl}date_options`).then(r=>r.json())
    }
}