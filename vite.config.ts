import react from '@vitejs/plugin-react-swc';
import Oxlint from 'unplugin-oxlint/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	// eslint-disable-next-line new-cap
	plugins: [react(), Oxlint()],
});
