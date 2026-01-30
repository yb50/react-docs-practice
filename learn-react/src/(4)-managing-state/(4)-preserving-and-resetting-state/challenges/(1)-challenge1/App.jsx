/*
import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');
  
  if (showHint) {
    return (
      <div>
        <p><i>Hint: Your favorite city?</i></p>
        <Form />
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </div>
    );
  }
  return (
    <div>
      <Form />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
    </div>
  );
}

function Form({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

*/

// Solution

import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && 
        <p><i>Hint: Your favorite city?</i></p>
      }
      <Form />
      {showHint ? (
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      ) : (
        <button onClick={() => {
          setShowHint(true);
        }}>Show hint</button>
      )}
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');

  return (
    <textarea 
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}