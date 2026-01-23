/*
export default function StoryTray({ stories }) {
  stories.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
*/

// Solution 1

// export default function StoryTray({ stories }) {
//   return (
//     <ul>
//       {stories.map(story => (
//         <li key={story.id}>
//           (story.label)
//         </li>
//       ))}
//       <li>Create Story</li>
//     </ul>
//   );
// }

// Solution 2

export default function StoryTray({ stories }) {
  // Copies the array
  const storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });
}

return (
  <ul>
    {storiesToDisplay.map(story => (
      <li key={story.id}>
        {story.label}
      </li>
    ))}
  </ul>
)