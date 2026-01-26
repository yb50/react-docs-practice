// Making other changes to an array 

import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function UpdatingArraysInState6() {
  const [list, setList] = useState(initialList);

  function handleCLick() {
    const nextList = [...list]; // Makes a copy of the original list
    nextList.reverse(); // or 'nextList.sort()'
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleCLick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}