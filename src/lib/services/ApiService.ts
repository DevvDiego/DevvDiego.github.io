/* import type { ApiResponse } from "$lib/types"; */

class ApiService {

    customFetch = fetch; //native fetch that can be changed to sv custom fetch

    baseHeaders = { "Content-Type": "application/json" };

    // utility to inject the sveltekit custom fetch
    setFetch(fetchFunction: typeof fetch) {
        this.customFetch = fetchFunction;
    }

    async verifyStatus(response: Response){
        if (!response.ok) {
            let data = await response.text();
            throw new ApiError( response.status, `${data}` );
        }

        const data = await response.json();
        
        /* if (data.success === false) {
            throw new ApiError(400, data.message);
        } */

        return data;

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

        let data = await this.verifyStatus(response);
        
        return data;

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

        let data = await this.verifyStatus(response);
        
        return data;

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

        let data = await this.verifyStatus(response);
        
        return data;

    }


}


export class ApiError extends Error{
    constructor(public status: number, message: string) {
        super(message);
    }
}


export const api = new ApiService(); // UNICA instancia exportada