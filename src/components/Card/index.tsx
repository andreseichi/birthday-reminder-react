import { Person } from '../Person';

import { Container } from './styles';

export function Card() {
  return (
    <Container>
      <h2>🎂 Birthday</h2>

      <ul>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </ul>
    </Container>
  );
}
