import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { viteStaticCopy, type Target } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		viteStaticCopy({
			targets: getTdTargets({ dest: '' })
		})
	],
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});

function getTdTargets(targetOpts: Omit<Target, 'src'>) {
	const distPath = path.join(import.meta.dirname, 'td', 'example', 'web', 'tdweb', 'dist');
	const ignoreList = ['tdweb.js'];

	return fs
		.readdirSync(distPath)
		.filter((file) => !ignoreList.includes(file))
		.map((file) => ({
			src: path.join(distPath, file),
			...targetOpts
		}));
}
