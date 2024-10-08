import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

Object.defineProperty(globalThis, 'matchMedia', {
	value: jest.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: undefined,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
