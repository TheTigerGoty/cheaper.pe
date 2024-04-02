import type { Products, Product } from "@/types/api-ripley"; // Los tipos de datos del api, productos es un array de product
import ProductsData from "@/data/products";
import { ProductCard } from "./ProductCard";

async function getProducts(): Promise<Products> {
  const response = await fetch("http://127.0.0.1:8000/products/zapatos");
  const products = await response.json();
  return products as Products;
}

//const products = await getProducts();

const products = ProductsData;

export default function Products() {
  return (
    <section>
      <div className="mt-14 space-y-5 text-center">
        <h3 className="pt-sans-regular text-lg">Todos los productos a tu alcance</h3>
        <h2 className="pt-sans-bold text-6xl">Todas las Ofertas</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center grid-flow-dense justify-items-center my-12"
      >
        {products.map((product, index) => <ProductCard product={product} size="lg" key={index} />)}
      </div>
    </section>
  )
}
