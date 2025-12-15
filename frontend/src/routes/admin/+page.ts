import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

import type { PageLoad } from './$types';
export const ssr = false; // Disable server-side rendering for this page

export const load: PageLoad = async ({ fetch }) => {    

    let stored_token = sessionStorage.getItem("blog_jwt");
    if( stored_token === null ){ error(401, "Not authorized"); } // keep error, or redirect straight to home???
    
    const fetch_options: RequestInit = {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${stored_token}`
        }
    };

    const response = await fetch(`${config.API}/admin/posts`, fetch_options);

    if( !response.ok ){ error(401, "Not authorized"); }

    /* let status = await response.json();
    console.log(status) */
}