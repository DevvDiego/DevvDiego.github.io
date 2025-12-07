import { error } from '@sveltejs/kit';
import { config } from '$lib/config';


/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch(`${config.API}/blog/`);

        if( !response.ok ){

            error(
                404, 
                `Route was not found.`
            )

        }

        let posts = await response.json();

        return {
            posts
        }

}