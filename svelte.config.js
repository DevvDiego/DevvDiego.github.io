import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// dev config
			// pages: 'build',
			// assets: 'build',
			
			//production config
			pages: "docs",
            assets: "docs",

			paths: {
				// change below to your repo name
				base: "/sveltePortfolio"
			},
			//??????????? will this work still?
			// hydrate the <div id="svelte"> element in src/app.html
			target: "#svelte",

			fallback: "404.html",
			precompress: false,
			strict: true
		})
	},


  preprocess: vitePreprocess()
};
export default config;