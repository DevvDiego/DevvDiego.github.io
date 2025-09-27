/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    try {

        /* Maybe load from an external API ?? */

        /* options are a rest api in php */
        let post;

        const response = await fetch("http://localhost:8000/blog/react-basics");

        if( !response ){
            console.log("\n\nBAD FETCH\n\n")
        }

        post = await response.json();

        return {
            post
        }

    } catch (error) {
        return {
            status: 404,
            error: error.message
        };

    }

}