import react from '@vitejs/plugin-react-swc';
import Oxlint from 'unplugin-oxlint/vite';
import { defineConfig } from 'vite';
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// eslint-disable-next-line new-cap
		Oxlint(),
		pluginPurgeCss({
			variables: true,
		}),
	],
});
