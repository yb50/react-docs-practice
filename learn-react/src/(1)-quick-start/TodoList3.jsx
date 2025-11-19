import { getImageUrl } from "./utils";

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function TodoList3() {
  return (
    <Card>
      <Avatar 
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}