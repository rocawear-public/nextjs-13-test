import { use } from 'react';
import Link from 'next/link';

async function getProducts() {
  const res = (await fetch('https://fakestoreapi.com/products')) as any;
  return res.json();
}
export default function Products() {
  const products = use(getProducts());

  return (
    <main className="flex flex-col">
      <h1>Products</h1>
      {products.map((product: any) => {
        return (
          <Link href={`/products/${product.id.toString()}`} key={product.id}>
            {product.title}
          </Link>
        );
      })}
    </main>
  );
}
