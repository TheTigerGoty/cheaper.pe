export type Products = Product[];

export interface Product {
  title: string;
  description: string;
  discount: string;
  image: string;
  price: number;
  brand: string;

  category: string
  subcategories: Subcategory;

  link: string;
  stores: Store[];
}

export interface Subcategory {
  name: string;
  type: string;
  brand: string;
}

export interface Store {
  name: string;
  image: string;
  price: string;
}
