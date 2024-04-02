export type Products = Product[];

export interface Product {
  brand: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  price: string;
  link: string;
  stores: Store[];
}

export interface Store {
  name: string;
  image: string;
  price: string;
}
