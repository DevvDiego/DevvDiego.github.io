/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    try {

        /* Maybe load from an external API ?? */

        /* options are a rest api in php */

        return {

        }

    } catch (error) {
        return {
            status: 404,
            error: error.message
        };

    }

}