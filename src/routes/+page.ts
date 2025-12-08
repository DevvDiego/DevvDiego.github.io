import { error } from '@sveltejs/kit';
import { config } from '$lib/config';


import type { PageLoad } from './$types';
import type { Post } from '$lib/types.js';

export const load: PageLoad = async ({ fetch }) => {    

    const response = await fetch(`${config.API}/blog/`);

    if( !response.ok ){
        error(404, `Route was not found.`)

    }

    let posts: Post = await response.json();

    return { posts }

}