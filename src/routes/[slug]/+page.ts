import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

import type { PageLoad } from './$types';
import type { ManyPosts } from '$lib/types.js';
import { api, ApiError } from '$lib/services/ApiService';

export const load: PageLoad = async ({ params }) => {    

    try {

        const response = await api.get(
            `${config.API}/blog/${params.slug}`  
        );

        const posts = response.data as ManyPosts;
        
        return { 
            post: posts[0],
            current_post_slug: params.slug
        };
    
    } catch (err) {
        //remember to allways throw an error in case anything unknown happens

        if( err instanceof ApiError ){

            if(err.status == 401){ 
                error(404, `Route: "${params.slug}" was not found.`); 
            }

        }

        if(err instanceof Error){ 
            error(400, "An error ocurred");
        }

        error(400, "An unexpected error occurred");

    }

}