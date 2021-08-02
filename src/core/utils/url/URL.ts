import URLParameters from "./IURLParameters";

export namespace URL {
    export function URLParameter (url:string, parameters: URLParameters) {
        parameters?.forEach(parameter => {
            const {key, value} = parameter
            url = url.replace(`{${key}}`, `${value}`)
        })
        return url;
    }
}