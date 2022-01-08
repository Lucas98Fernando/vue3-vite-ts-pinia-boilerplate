import axios, { AxiosInstance } from "axios"

const api: AxiosInstance = axios.create({
    baseURL: "http://urlbase"
})

export default api
