'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  //visible on browser console
  console.log(count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
}
