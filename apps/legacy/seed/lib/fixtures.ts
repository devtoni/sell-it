import { faker } from "@faker-js/faker";
import { Categories, Product, User } from "./definitions";

export const createUser = (): User => {
  const email = faker.internet.email();
  const username = email.split('@')[0];
  const gender = ['Female', 'Male'];

  return {
    email,
    username,
    password: faker.internet.password(),
    city: 'Barcelona',
    gender: gender[faker.number.int({ min: 0, max: gender.length - 1 })],
    age: faker.number.int({ min: 18, max: 100 })
  };
}

export const createProduct = (): Product => {
  const productName = faker.commerce.productName();
  const category = Categories[faker.number.int({ min: 0, max: Categories.length - 1 })];

  return {
    title: productName,
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    category,
    imageUrl: faker.image.urlLoremFlickr({ category: category.split(' ').join('-') })
  }
}

export const generateProducts = (numberOfProducts: number = 1): Product[] => {
  return Array.from({ length: numberOfProducts }).map(createProduct);
}

export const generateUsers = (numberOfUsers: number = 1): User[] => {
  return Array.from({ length: numberOfUsers }).map(createUser);
}

export const parameters = {
  numberOfUsers: process.env.USERS,
  numberOfProductsByUser: process.env.PRODUCTS_BY_USER
}