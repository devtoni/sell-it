export type User = {
  email: string;
  username: string;
  password: string;
  city: string;
  gender: string;
  age: number;
}

export const Categories = [
  'Cars', 
  'Home', 
  'Beauty', 
  'Electronics', 
  'Sport', 
  'Music', 
  'Forniture', 
  'Consoles and videogames', 
  'Books', 
  'Fashion', 
  'Animals', 
  'Real State'
] as const;

export type CategoryOption = typeof Categories[number];

export type Product = { 
  title: string; 
  description: string; 
  price: string; 
  category: CategoryOption; 
  imageUrl: string;
}