// 8th March 2024
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
import { recipes } from "./data.js";

// Challenge 1: Splitting a list into two

export default function List() {
  const chemists = people.filter((person) =>
    person.profession === "chemist" ? person : null
  );
  const others = people.filter((person) =>
    person.profession === "chemist" ? null : person
  );
  const chemistItems = chemists.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });
  const otherItems = others.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistItems}</ul>
      <h1>Everyone Else</h1>
      <ul>{otherItems}</ul>
    </article>
  );
}

// [ALTERNATIVE SOLUTION 1]

let chemists = [];
let everyoneElse = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

// export default function List() {
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListSection
//         title="Chemists"
//         people={chemists}
//       />
//       <ListSection
//         title="Everyone Else"
//         people={everyoneElse}
//       />
//     </article>
//   );
// }

/// [ALTERNATIVE SOLUTION 2]

// function ListSection({ title, people }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>
//         {people.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </>
//   );
// }

export function List2() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
}

/// [Challenge 2: Nested lists in one component]
export function RecipeList() {
  const recipeItem = recipes.map((recipe) => (
    <div>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {recipeItem}
    </div>
  );
}

// [Challenge 3: Extracting a list item component]

function Recipe({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export function RecipeList2() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
