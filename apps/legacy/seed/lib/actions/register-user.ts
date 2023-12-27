import { Page } from "@playwright/test";
import { User } from "../definitions";

export const registerUser = async (page: Page, user: User) => {
  await page.goto('/register');

  const emailInput = await page.getByRole('textbox', { name: 'email' });
  const passwordInput = await page.getByRole('textbox', { name: 'password' });
  const submitButton = await page.locator('button', { hasText: /Sign Up/ });

  await emailInput.fill(user.email);
  await passwordInput.fill(user.password);
  await submitButton.click();

  await page.waitForURL('/login');
}

