import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch(`${config.API}/blog/` + params.slug);

        if( !response.ok ){

            error(
                404, 
                `Route: "${params.slug}" was not found.`
            )

        }

        let post = await response.json();

        return {
            post
        }

}