import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

        const response = await fetch("http://localhost:8000/blog");

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