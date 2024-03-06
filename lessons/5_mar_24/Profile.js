
import { getImageUrl } from './utils.js';

function Profile(props){
  return(
    <section className="profile">
    <h2>{props.person.name}</h2>
    <img
      className="avatar"
      src={getImageUrl(props.person.imageId)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
    <ul>
      <li>
        <b>Profession: </b> 
        {props.person.profession}
      </li>
      <li>
        <b>Awards: {props.person.no_awards} </b> 
        {'('+props.person.awards + ')'}
      </li>
      <li>
        <b>Discovered: </b>
        {props.person.discovery}
      </li>
    </ul>
  </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
            size={70}
      person={
        {
            name : 'Maria Skłodowska-Curie',
            profession: 'physicist and chemist',
            awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',           
            no_awards:'4',
            discovery: 'polonium (chemical element)',            
            imageId: 'szV5sdG',   
        }
        }
      />

        <Profile 
            size={70}
      person={
        {
            name : 'Katsuko Saruhashi',
            profession: 'geochemist',
            awards:'Miyake Prize for geochemistry, Tanaka Prize',           
            no_awards:'2',
            discovery: 'a method for measuring carbon dioxide in seawater',
            imageId: 'YfeOqp2',            
        }
        }
        />         
    </div>
  );
}
