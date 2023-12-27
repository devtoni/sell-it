import { Page  } from "@playwright/test";
import { Product } from "../definitions";

export const addProduct = async (page: Page, product: Product) => {
  await page.goto('/add-product');

  const fileInput = await page.locator('[name="imgLocal"]');
  const titleInput = await page.locator('[name="title"]');
  const descriptionInput = await page.locator('[name="description"]');
  const priceInput = await page.getByRole('spinbutton');
  const categorySelect = await page.getByRole('combobox');
  const addProductCta = await page.locator('[value="Send"]');
  const response = await fetch(product.imageUrl);
  const imageBuffer = await response.arrayBuffer();
   
  await fileInput.setInputFiles({ buffer: Buffer.from(imageBuffer), name: product.title, mimeType: 'image/jpeg' });
  await titleInput.fill(product.title);
  await descriptionInput.fill(product.description);
  await priceInput.fill(product.price);
  await categorySelect.selectOption(product.category);
  await addProductCta.click();

  await page.waitForURL(/profile/);
}

export const addProducts = async (page: Page, products: Product[]) => {
  for (const product of products) {
    await addProduct(page, product);
  }
}