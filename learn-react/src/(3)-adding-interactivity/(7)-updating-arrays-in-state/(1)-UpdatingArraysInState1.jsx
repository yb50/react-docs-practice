// Adding to an array 

import { useState } from "react";

let nextId = 0;

export default function UpdatingArraysInState1() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          // { id: nextId++, name: name } - Put old items at the end, like `unshift()`
          ...artists,
          { id: nextId++, name: name } // like `push()`
        ]);
      }}>
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}