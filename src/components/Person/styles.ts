import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  width: 14rem;
  margin: 1rem;

  img {
    height: 3.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
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
