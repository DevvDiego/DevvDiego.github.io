import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../public', // Directorio de salida (relativo al proyecto)
			assets: '../public',
			fallback: 'index.html',
		}),

		paths:{
			base:"",
		}		
	}

};

export default config;
