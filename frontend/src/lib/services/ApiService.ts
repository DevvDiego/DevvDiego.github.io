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

        const response = await this.customFetch(`${endpoint}`, fetch_options);
        
        if (!response.ok) {

            let errorMessage = `HTTP ${response.status}`;
            let errorData: any = {};
            
            try {
                // Intentar obtener JSON del error
                const contentType = response.headers.get('content-type');

                if(contentType?.includes('application/json')) {
                    errorData = await response.json();
                    errorMessage = errorData.message
                    //errorMessage = errorData.message || errorData.error || errorMessage;
            
                }else{
                    // Si no es JSON, obtener texto
                    errorMessage = await response.text() || errorMessage;
            
                }
            
            } catch {
                // Si no se puede parsear nada
                errorMessage = `Error ${response.status}: ${response.statusText}`;
            
            }
            
            throw new ApiError(response.status, errorMessage);
        }
        
        return await response.json() as ApiResponse;
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