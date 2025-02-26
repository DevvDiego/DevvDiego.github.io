/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const res = await fetch("/projects.json");
	const data = await res.json();

	return { data };
}