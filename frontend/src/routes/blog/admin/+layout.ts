import { redirect } from '@sveltejs/kit';
import { config } from '$lib/config';

import type { LayoutLoad } from './$types';
import { api, ApiError } from '$lib/services/ApiService';

export const ssr = false; // Disable ssr for this layout
export const load: LayoutLoad = async ({ fetch }) => {    
    
    const token = sessionStorage.getItem("blog_jwt");
    if (!token) throw redirect(307, '/');
    
    try {
        api.setFetch(fetch);
        const result = await api.post(`${config.API}/admin/verify`, "", {
            "Authorization": `Bearer ${token}`
        });
        
        if (!result.success) throw new Error('Invalid token');
        
        return { authenticated: true };
    
    } catch(err) {
        
        if(err instanceof ApiError){
            
            if(err.status == 401 || err.status == 403){
                sessionStorage.removeItem("blog_jwt");
                throw redirect(307, '/');

            }
        
        }

        if(err instanceof Error){
            // Oher API or network errors, these dont delete the token
            console.error('Error when fetching: ', err);
    
        }
        
    }
};