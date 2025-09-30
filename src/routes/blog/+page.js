import { error } from '@sveltejs/kit';

const apiUrl = import.meta.env.PUBLIC_API_URL;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch(`${apiUrl}/blog/`);

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