import { data } from '../../services/data';

import { Person } from '../Person';

import { Container } from './styles';

export function Card() {
  return (
    <Container>
      <h2>🎂 Birthday 🎉🎉</h2>

      <ul>
        {data.map((item) => (
          <Person
            id={item.id}
            name={item.name}
            birthday={item.birthday}
            image={item.image}
            key={item.id}
          />
        ))}
      </ul>
    </Container>
  );
}
