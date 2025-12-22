/* import type { ApiResponse } from "$lib/types"; */

import type { ApiResponse } from "$lib/types";

class ApiService {

    customFetch = fetch; //native fetch that can be changed to sv custom fetch

    baseHeaders = { "Content-Type": "application/json" };

    // utility to inject the sveltekit custom fetch
    setFetch(fetchFunction: typeof fetch) {
        this.customFetch = fetchFunction;
    }


    async request(
        method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
        endpoint: RequestInfo | URL, 
        options: {
            headers?: HeadersInit;
            body?: any; // Para POST, PUT, PATCH
            // params?: Record<string, string>; // Para query params
        } = {}
    ){
        
        const fetch_options: RequestInit = {
            method: method, 
            headers: {
                ...this.baseHeaders,
                ...options.headers
            }
        };

        if(options.body){
            fetch_options.body = options.body;
        }

        try {
            const response = await this.customFetch(endpoint, fetch_options);
            const status = response.status;
            let responseData: ApiResponse;
            
            try {
                responseData = await response.json();

            } catch {
                // not valid json
                responseData = {
                    success: false,
                    message: `Invalid JSON response (status: ${status})`,
                    data: null
                };

            }

            const enhancedResponse = {
                ...responseData,
                status: status,
                ok: response.ok && responseData.success, // Combinado
                isSuccess: responseData.success === true,
                isError: responseData.success === false,
                isServerError: status >= 500,
                isClientError: status >= 400 && status < 500
            };

            if (status >= 500) {
                throw new ApiError(
                    status, 
                    `Server error: ${responseData.message || 'Internal server error'}`,
                    /* enhancedResponse // Pasamos la respuesta completa */
                );
            }

            return enhancedResponse;

        } catch (error) {
            /*
                Here we capture network or the ApiError thrown earlier
                and any other error
            */

            if (error instanceof ApiError) {
                throw error;
            }
            

            throw new ApiError(
                0, // 0 indica error de red
                `Network error: ${error instanceof Error ? error.message : 'Connection failed'}`,
                //añadir datos extra si es err de red? No creo
                /* {
                    success: false,
                    message: 'Network error',
                    data: null,
                    status: 0,
                    ok: false,
                    isSuccess: false,
                    isError: true,
                    isServerError: false,
                    isClientError: false
                } */
            );
        }
    }



    async get(endpoint: RequestInfo | URL, headers: HeadersInit = {}){

        return this.request("GET", endpoint, {headers: headers});
        
    }



    async post(endpoint: RequestInfo | URL, body_data: BodyInit = "", headers: HeadersInit = {}){

        return this.request(
            "POST", endpoint, {headers: headers, body: body_data}
        );

    }

    

    async patch(endpoint: RequestInfo | URL, body_data: BodyInit, headers: HeadersInit){

        return this.request(
            "PATCH", endpoint, {headers: headers, body: body_data}
        );

    }


}


export class ApiError extends Error{
    constructor(public status: number, message: string) {
        super(message);
    }
}


export const api = new ApiService(); // UNICA instancia exportada