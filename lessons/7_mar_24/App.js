/// 7th March 2024

// Challenge: Passing JSX using 'children' prop
function Card({children}) {
  return(
  <div className="card">
    {children}
  </div>
  );
  
}

export function Profile() {
    return (
      <div>
        <Card>        
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />          
          </div>
        </Card>
        <Card>
        <div className="card-content">
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
          </div>
        </Card>
      </div>
    );
  }
  

// // Challenge 1: Show an icon for incomplete items with ? :
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✅': '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }

// Challenge 2 : Show the item importance with &&
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance>0 && (<i>(Importance: {importance})</i>)}
    </li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Challenge 3: Refactor a series of '? :' to 'if' and variables
function Drink({ name }) {
  let part = 'leaf';
  let content = '15–70 mg/cup';
  let age = '4,000+ years';

  if (name === 'coffee'){
    part = 'bean';
    content = '80-185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{content}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}


// ALTERNATIVE SOLUTION
// const drinks = {
//   tea: {
//     part: 'leaf',
//     caffeine: '15–70 mg/cup',
//     age: '4,000+ years'
//   },
//   coffee: {
//     part: 'bean',
//     caffeine: '80–185 mg/cup',
//     age: '1,000+ years'
//   }
// };

// function Drink({ name }) {
//   const info = drinks[name];
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{info.part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{info.caffeine}</dd>
//         <dt>Age</dt>
//         <dd>{info.age}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }


