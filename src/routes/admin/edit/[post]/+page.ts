import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

import type { PageLoad } from './$types';
import type { Post } from '$lib/types.js';

export const load: PageLoad = async ({ fetch, params }) => {    

    const response = await fetch(`${config.API}/blog/` + params.post );

    if( !response.ok ){ 
        error(404, `Route: "${params.post}" was not found.`);

    }

    let post: Post = await response.json();
    let current_post_slug: string = params.post;

    return { 
        post,
        current_post_slug
    }

}