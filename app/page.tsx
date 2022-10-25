import Link from 'next/link';
import Counter from './counter';

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Home</h1>
      <div className="flex flex-row gap-4">
        <Link className="py-2 px-4 bg-green-400" href="/products">
          Products
        </Link>
        <Link className="py-2 px-4 bg-green-400" href="/nested-products">
          Nested Products
        </Link>
      </div>

      <Counter />
    </main>
  );
}
