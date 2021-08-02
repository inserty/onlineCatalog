import { AxiosRequestConfig, AxiosResponse, Method, default as axios } from 'axios'
import { URL } from '../../utils/url/URL';
import URLParameters from '../../utils/url/IURLParameters';

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios


const endpoint = (
    relation:string,
    method: Method,
    parameters: URLParameters,
    data?: any,
    config?: AxiosRequestConfig
) => {
    config = config || {}
    const promise: Promise<AxiosResponse<any>> = new Promise((resolve, reject) => {
        axios.request({
            ...config,
            url: "api/" + URL.URLParameter(relation, parameters),
            method: method,
            data: method.toLowerCase() === "get" ? undefined : data || {}
        })
        .then(resolve)
        .catch(error => reject(error))
        }
    )
    return promise
}

const httpService = {
    ...instance,
    endpoint
}

export default httpService