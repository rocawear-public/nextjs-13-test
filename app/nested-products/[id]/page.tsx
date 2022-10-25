import { use } from 'react';
import Image from 'next/image';

async function getProduct(id: string) {
  const res = (await fetch(`https://fakestoreapi.com/products/${id}`)) as any;
  return res.json();
}
export default function Product({ params }: { params: { id: string } }) {
  const product = use(getProduct(params.id));

  return (
    <main className="flex flex-col">
      <h1>Product</h1>
      <div className="flex flex-col">
        <p>{product.title}</p>
        <Image src={product.image} alt={product.title} width={400} height={400} />
        <p>{product.description}</p>
        <p className="font-bold">{product.price}</p>
      </div>
    </main>
  );
}
