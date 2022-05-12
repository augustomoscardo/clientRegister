import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  .startRegister {
    background: var(--gray-light);
    padding: 4rem 2rem;
    border-radius: 1rem;
    margin-top: 5rem;
    justify-content: center;
    color: var(--text-fade);

    text-align: center;

    h2 {
      font-size: 2rem;
    }

    h3 {
      margin-top: 2.5rem;
    }

    a {
      color: var(--text-regular);

      &:hover {
        font-weight: bold;
        color: var(--blue-light);
      }
    }
  }

  @media (max-width: 380px) {
    max-width: 300px;

    .startRegister {
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        margin-top: 2.5rem;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 780px) {
    max-width: 600px;

    .startRegister {
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        margin-top: 2.5rem;
        font-size: 1rem;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 940px;
  width: 100%;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  a {
    background: var(--gray-light);
    color: var(--text-fade);
    padding: 1rem;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    border: 1px solid transparent;
    border-radius: 0.5rem;

    &:hover {
      color: var(--text-regular);
      border-color: var(--blue-light);
      border-radius: 0.5rem;
    }

    p {
      margin-top: 0.625rem;
    }

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 380px) {
    max-width: 400px;
    margin-top: 2.5rem;

    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;

    a {
      padding: 0.5rem;
    }
  }
`;
