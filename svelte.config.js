import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			
			fallback: "404.html",
			//build folder
			//MAKE EXACT MATCH ALSO USING "/"
			pages: 'docs/',
			assets: 'docs/',

		}),
		paths:{
			base:"" //no base cause working on root of github.io
		}
	},

	preprocess: vitePreprocess()
};

export default config;
