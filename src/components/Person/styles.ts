import styled from 'styled-components';

export const Li = styled.li`
  display: flex;

  img {
    height: 3.5rem;
    border-radius: 50%;
  }

  div {
    margin: 0 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1rem;
      font-weight: 500;

      color: var(--text-title);
    }

    p {
      font-size: 0.875rem;
      font-weight: 500;

      color: var(--text-body);
    }
  }
`;
