import react from '@vitejs/plugin-react-swc';
import Oxlint from 'unplugin-oxlint/vite';
import { defineConfig } from 'vite';
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isDevelopment = mode === 'development';

	return {
		plugins: [
			react(),
			// eslint-disable-next-line new-cap
			isDevelopment && Oxlint(),
			pluginPurgeCss({
				variables: true,
			}),
		],
		server: {
			port: 3000,
			open: true,
			host: true,
		},
	};
});
