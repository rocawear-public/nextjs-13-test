import { use } from 'react';
import Link from 'next/link';

async function getProducts() {
  const res = (await fetch('https://fakestoreapi.com/products')) as any;
  return res.json();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const products = use(getProducts());

  return (
    <div className="bg-green-200 flex flex-row gap-10 p-10">
      <div className="w-2/6 flex flex-col gap-2">
        {products.map((product: any) => {
          return (
            <Link
              href={`/nested-products/${product.id.toString()}`}
              key={product.id}
              className="p-2 bg-gray-500 rounded"
            >
              {product.title}
            </Link>
          );
        })}
      </div>
      <div className="w-4/6 flex flex-col gap-2">{children}</div>
    </div>
  );
}
