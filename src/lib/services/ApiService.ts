/* import type { ApiResponse } from "$lib/types"; */

class ApiService {

    customFetch = fetch; //native fetch that can be changed to sv custom fetch

    baseHeaders = { "Content-Type": "application/json" };
    /**
     * if set to true: will use await to return parsed json
     * if set to false (default): will return the promise that response.json() gives
     */
    returnData = false;

    // utility to inject the sveltekit custom fetch
    setFetch(fetchFunction: typeof fetch) {
        this.customFetch = fetchFunction;
    }

    async verifyStatus(response: Response){
        if (!response.ok) {
            let data = await response.text();
            throw new ApiError( response.status, `${data}` );
        }

        /* if (data.success === false) {
            throw new ApiError(400, data.message);
        } */

        return response;

    }


    async get(endpoint: RequestInfo | URL, headers: HeadersInit = {}){

        const fetch_options: RequestInit = {
            method: "GET", 
            headers: {
                ...this.baseHeaders,
                ...headers
            },
        };

        const response = await this.customFetch(`${endpoint}`, fetch_options);

        if(this.returnData == true){
            return await response.json();
        }
        
        return response;

    }


    async post(endpoint: RequestInfo | URL, body_data: BodyInit = "", headers: HeadersInit = {}){

        const fetch_options: RequestInit = {
            method: "POST", 
            headers: {
                ...this.baseHeaders,
                ...headers
            },

            body: body_data
        };

        const response = await this.customFetch(`${endpoint}`, fetch_options);

        if(this.returnData == true){
            return await response.json();
        }
        
        return response;

    }


    async patch(endpoint: RequestInfo | URL, body_data: BodyInit, headers: HeadersInit){

        const fetch_options: RequestInit = {
            method: "PATCH", 
            headers: {
                ...this.baseHeaders,
                ...headers
            },
            body: JSON.stringify(body_data)
        };

        const response = await this.customFetch(`${endpoint}`, fetch_options);

        if(this.returnData == true){
            return await response.json();
        }
        
        return response;

    }


}


export class ApiError extends Error{
    constructor(public status: number, message: string) {
        super(message);
    }
}


export const api = new ApiService(); // UNICA instancia exportada