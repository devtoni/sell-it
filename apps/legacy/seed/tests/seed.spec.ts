import { test } from '@playwright/test';
import { generateProducts, generateUsers, parameters } from '../lib/fixtures';
import { registerUser } from '../lib/actions/register-user';
import { loginUser } from '../lib/actions/login-user';
import { editUserProfile } from '../lib/actions/edit-user-profile';
import { addProducts } from '../lib/actions/add-product';


test.describe('Seed Sell-it with users and products', () => {

  test.describe.configure({ timeout: 60000 });
  
  test('Action', async ({ browser }, { project }) => {
    console.log('\x1b[33m%s\x1b[0m', '⚠️ Running test in', project.use.baseURL);

    const { numberOfUsers, numberOfProductsByUser } = parameters;
    const users = generateUsers(Number(numberOfUsers));
    
    for (const user of users) {
      const context = await browser.newContext();
      const page = await context.newPage();
      const products = generateProducts(Number(numberOfProductsByUser));

      await registerUser(page, user);
      await loginUser(page, user);
      await editUserProfile(page, user);
      await addProducts(page, products);
    }
  })
})




