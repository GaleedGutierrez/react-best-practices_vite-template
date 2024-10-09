/* eslint-disable @stylistic/padding-line-between-statements */
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('The Home Page', () => {
	test('Title', async ({ page }) => {
		const TITLE = page.getByRole('heading', {
			name: '⚡ Vite React Best Practices Template (by Codely) ⚛️',
		});
		await expect(TITLE).toBeVisible();
	});

	test('Change theme', async ({ page }) => {
		const BUTTON_THEME = page.getByRole('button', { name: 'Change Theme' });
		await BUTTON_THEME.click();
		const BODY_TAG = page.locator('body');
		await expect(BODY_TAG).toHaveClass('dark');
	});
});
