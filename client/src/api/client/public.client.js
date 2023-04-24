import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0:500/api/v1/";

const publicClient = axios({
    baseURL,
    paramsSerializer:{
        encode: params => queryString.stringify(params)
    }
});

publicClient.interceptors.request(async config => {
    return {
        ...config,
        headers:{
            "Content-Type": "application/json"
        }
    }
});

publicClient.interceptors.response.use(( response ) => {
    if (response && response.data ) return response.data;
    return response;
},(err) => {
        throw err.response.data;
    
});

export default publicClient;