/* --- Challenge 4 of 4 --- */

// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) =>
//         <p key={index}>
//           {line}
//         </p>
//       )}
//     </article>
//   );
// }

// Solution

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });

  // Remove the first <hr />
  output.shift();

  return(
    <article>
      {output}
    </article>
  );
}