import adapter from '@sveltejs/adapter-static';

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
	}
};

export default config;
