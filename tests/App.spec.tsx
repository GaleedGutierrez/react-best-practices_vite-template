import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

test('App component display header', () => {
	render(<App />);

	const HEADING = screen.getByText(
		/⚡ Vite React Best Practices Template \(by Codely\) ⚛️/i,
	);
	const BUTTON_THEME = screen.getByText(/Change Theme/i);

	expect(HEADING).toBeInTheDocument();
	expect(BUTTON_THEME).toBeInTheDocument();
});
