/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',

	// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'jest-transform-stub',
	},

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',

	// The glob patterns Jest uses to detect test files
	testMatch: ['<rootDir>/tests/**/*.(spec|test).(ts|tsx)'],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['\\\\node_modules\\\\', '<rootDir>/tests/e2e/'],

	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': [
			'@swc/jest',
			{
				sourceMaps: true,
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
					},
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
};

export default config;
