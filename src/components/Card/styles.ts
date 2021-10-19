import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  background: #fff;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    justify-content: flex-start;

    flex-wrap: wrap;
  }

  li {
    margin: 1rem;
  }

  h2 {
    color: var(--text-title);
  }
`;
