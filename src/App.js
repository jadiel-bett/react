import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    var letter = size < 90 ? 's': 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, letter)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={60}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
