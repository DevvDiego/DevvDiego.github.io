import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch("http://localhost:8000/blog/" + params.slug);

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