import httpService from '../../shared/services/httpService'
import URLParameters from '../url/IURLParameters'
import { AxiosRequestConfig } from 'axios'

class ObjectState {
    protected fetchRelation: string
    protected persistRelation: string

    constructor(options: {
        fetchRelation: string,
        persistRelation: string
    }) {
        this.fetchRelation = options.fetchRelation
        this.persistRelation = options.persistRelation
    }

    protected fetch = (config?:AxiosRequestConfig) => {
        return httpService.endpoint(this.fetchRelation, "GET", [], undefined, config)
            .then(({data}) => {
                return data
            })
    }

    protected add = (data: any, parameters:URLParameters, config?:AxiosRequestConfig) => {
        return httpService.endpoint(this.persistRelation, "POST", parameters, data, config)
            .then(({data}) => {
                return data
            })
    }

    protected update = (data: any, parameters:URLParameters, config?:AxiosRequestConfig) => {
        return httpService.endpoint(this.persistRelation, "POST", parameters || [], data, config)
            .then(({data}) => {
                return data
            })
    }

    protected delete = (data:any, parameters:URLParameters, config?:AxiosRequestConfig) => {
        return httpService.endpoint(this.persistRelation, "DELETE", parameters || [], data ,config)
            .then(({data}) => {
                return data
            })
    }
}

export default ObjectState