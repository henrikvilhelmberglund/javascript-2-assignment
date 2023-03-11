import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			presets: [
				presetUno(),
				presetWebFonts({
					provider: "none",
					fonts: {
						// custom ones
						starjedi: "Star Jedi",
						starjedihollow: "Star Jedi Hollow",
						starjedirounded: "Star Jedi Rounded",
					},
				}),
			],
			mode: "svelte-scoped",
		}),
		sveltekit(),
	],
});
