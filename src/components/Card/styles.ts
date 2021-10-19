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

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  h2 {
    color: var(--text-title);

    margin-bottom: 1rem;
  }
`;
