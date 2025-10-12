import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

    const response = await fetch(`${config.API}/blog/` + params.slug);

    if( !response.ok ){ 
        error(404, `Route: "${params.slug}" was not found.`);

    }

    let post = await response.json();

    //only handle the parsing, everything else is managed by sveltekit
    try {
        post.content =  JSON.parse(post.content);
        
    } catch (err) {
        post.content = [{type:"subtitle",text:"Error cargando el contenido, reporta este error."}]

    }


    return {
        post
    }


}