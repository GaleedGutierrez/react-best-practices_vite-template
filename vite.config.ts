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
			open: true,
			host: true,
		},
		test: {
			clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test
			// If you need coverage, you can enable it here
			// coverage: {
			// 	enabled: true, // Indicates whether the coverage information should be collected while executing the test
			// 	provider: 'v8', // Indicates which provider should be used to instrument code for coverage
			// 	reportsDirectory: 'coverage', // The directory where Vitest should output its coverage files
			// 	include: ['src/**/*'], // The glob patterns Vitest uses to detect test files
			// },
			globals: true,
			environment: 'jsdom', // The test environment that will be used for testing
			setupFiles: ['./tests/setupTests.ts'], // A list of paths to modules that run some code to configure or set up the testing framework before each test
			include: ['./tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
			// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
			alias: {
				'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
				'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
					'jest-transform-stub',
			},
			// A map from regular expressions to paths to transformers
			transformMode: {
				web: ['**/*.tsx', '**/*.ts'], // Support for TypeScript files
			},
			reporters: process.env.GITHUB_ACTIONS
				? ['dot', 'github-actions']
				: ['dot'], // The list of reporters that will be used to report the test results
		},
	};
});
