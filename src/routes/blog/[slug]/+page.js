import { error } from '@sveltejs/kit';

const apiUrl = import.meta.env.PUBLIC_API_URL;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch(`${apiUrl}/blog/` + params.slug);

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