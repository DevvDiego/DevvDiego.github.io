import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs', // Directorio de salida (relativo al proyecto)
			assets: 'docs',
			fallback: '404.html', // use 404.html to trick gh pages to always load the sveltekit file
		}),

		paths:{
			base:"",
		}		
	}
};

export default config;
