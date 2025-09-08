import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // <-- Importa esto

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()], // <-- Agrega tailwindcss() aquí
});