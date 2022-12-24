import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		globals: true,
		include: ["src/**/*.{test,spec}.{js,ts}"],
		passWithNoTests: true,
		environment: "jsdom",
		setupFiles: "./setupTests.ts",
		coverage: {
			provider: "c8",
		},
	},
};

export default config;
