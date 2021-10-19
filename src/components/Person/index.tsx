import { Li } from './styles';

interface PersonProps {
  id: number;
  name: string;
  birthday: string;
  image: string;
}

export function Person({ name, birthday, image }: PersonProps) {
  return (
    <Li>
      <img src={image} alt="Profile" />
      <div>
        <h3>{name}</h3>
        <p>{birthday}</p>
      </div>
    </Li>
  );
}
