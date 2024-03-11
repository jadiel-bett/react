// 11th March 2024
import { Fragment } from "react";

import Profile from "./Profile.js";

// Challenge 3 on Rendereing lists
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}

/// LESSON: KEEPING COMPONENTS PURE
// Challenge 1: Fix a broken Clock
// export default function Clock({ time }) {
//   let hours = time.getHours();
//   if (hours >= 0 && hours <= 6) {
//     document.getElementById("time").className = "night";
//   } else {
//     document.getElementById("time").className = "day";
//   }
//   return <h1 id="time">{time.toLocaleTimeString()}</h1>;
// }

export function Clock({ time }) {
  let hours = 0;
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

/// Challenge 2: Fix a broken profile
//
// Two Profile components are rendered side by side with different data.
// Press “Collapse” on the first profile, and then “Expand” it.
// You’ll notice that both profiles now show the same person.
// This is a bug.
// Find the cause of the bug and fix it.
//
// export default function App() {
// return (
//   <>
//     <Profile person={{
//       imageId: 'lrWQx8l',
//       name: 'Subrahmanyan Chandrasekhar',
//     }} />
//     <Profile person={{
//       imageId: 'MK3eW3A',
//       name: 'Creola Katherine Johnson',
//     }} />
//   </>
// )
// }

export function App() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}

/// Challenge 3: Fix a broken story tray
// The CEO of your company is asking you to add “stories” to your online clock
// app, and you can’t say no. You’ve written a StoryTray component that
// accepts a list of stories, followed by a “Create Story” placeholder.

// You implemented the “Create Story” placeholder by pushing one more
// fake story at the end of the stories array that you receive as a prop.
// But for some reason, “Create Story” appears more than once.
// Fix the issue.
// export default function StoryTray({ stories }) {
//   stories.push({
//     id: "create",
//     label: "Create Story",
//   });

//   return (
//     <ul>
//       {stories.map((story) => (
//         <li key={story.id}>{story.label}</li>
//       ))}
//     </ul>
//   );
// }

export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
