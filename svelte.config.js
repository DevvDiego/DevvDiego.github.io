import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			
			//build folder
			pages: 'docs',
			assets: 'docs',
			
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths:{
			base:"" //no base cause working on root of github.io
		}
	}
};

export default config;
