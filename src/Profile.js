// import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

let currentPerson;

export default function Profile({ person }) {
  currentPerson = person;
  return (
    <div>
      <Header />
      <Avatar />
    </div>
  );
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
