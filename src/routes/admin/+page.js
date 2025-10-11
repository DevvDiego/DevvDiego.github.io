import { error } from '@sveltejs/kit';
import { config } from '$lib/config';


/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {    

    const loginData = {
        password: ""
    }

    const response = await fetch(`${config.API}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    });

    if( !response.ok ){ error(403, `Could not log in`); }

    let status = await response.json();
    console.log(status)
}