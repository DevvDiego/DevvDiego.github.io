import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

let featured_posts = [
    "react-basics",
    "svelte-basics"
];


/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

    const postsPromises = featured_posts.map(slug => 
        fetch(`${config.API_URL}/blog/${slug}`)
            .then(res => {
                if (!res.ok) {
                    console.log(`404 Route "${slug}" was not found.`);
                    // Devolvemos null en lugar de la respuesta fallida
                    return null;
                }
                return res.json();
            })
            
            .catch(error => {
                console.log(`Error fetching "${slug}":`, error.message);
                return null; // Devolvemos null para errores de red también
            })
    );        

    let posts = await Promise.all(postsPromises);
    
    // Filtramos los nulls (posts que fallaron)
    const successfulPosts = posts.filter(post => post !== null);

    return {
        posts: successfulPosts
    };

}
