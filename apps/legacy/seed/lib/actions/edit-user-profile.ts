import { Page } from "@playwright/test";
import { User } from "../definitions";

export const editUserProfile = async (page: Page, user: User) => {
  await page.goto('/edit-profile');

  const usernameInput = await page.locator('[name="username"]');
  const cityInput = await page.locator('[name="city"]');
  const genderSelect = await page.getByRole('combobox', { name: 'gender' });
  const ageInput = await page.getByRole('spinbutton', { name: 'age' });
  const saveChanges = await page.locator('[value="Save"]');

  await usernameInput.fill(user.username);
  await cityInput.fill(user.city);
  await genderSelect.selectOption(user.gender);
  await ageInput.fill(String(user.age));
  await saveChanges.click();

  await page.waitForURL(/profile/);
}