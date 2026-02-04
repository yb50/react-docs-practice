/*
import { useRef } from 'react';

export default function Toggle() {
  const isOnRef = useRef(false);

  return (
    <button onClick={() => {
      isOnRef.current = !isOnRef.current;
    }}>
      {isOnRef.current ? 'On' : 'Off'}
    </button>
  );
}
*/

// Solution

import { useState } from 'react';

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <button onClick={() => {
      setToggle(!toggle);
    }}>
      {toggle ? 'On' : 'Off'}
    </button>
  );
}
