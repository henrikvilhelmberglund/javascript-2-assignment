// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// change path below to your github repo if using Github Pages
			base: dev ? "" : "/javascript-2-assignment",
		},
	},
	vitePlugin: {
		experimental: {
			inspector: true,
		},
	},
	preprocess: [vitePreprocess()],
};

export default config;
