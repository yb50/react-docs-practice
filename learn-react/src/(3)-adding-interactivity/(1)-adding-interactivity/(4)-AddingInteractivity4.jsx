import { useState } from "react";

export default function AddingInteractivity4() {
  const [score, setScore] = useState(0);

  function increment(amount) {
    setScore(s => s + amount);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => increment(3)}>+3</button>
      <h1>Score: {score}</h1>
    </>
  );
}