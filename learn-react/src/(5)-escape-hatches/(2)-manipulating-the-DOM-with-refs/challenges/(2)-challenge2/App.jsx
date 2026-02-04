/*
export default function Page() {
  return (
    <>
      <nav>
        <button>Search</button>
      </nav>
      <input
        placeholder="Looking for something?"
      />
    </>
  );
}
*/

// Solution

import { useRef } from 'react';

export default function Page() {
  const focusRef = useRef(null);

  return (
    <>
      <nav>
        <button onClick={() => {
          focusRef.current.focus();
        }}>
          Search
        </button>
      </nav>
      <input
        ref={focusRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
