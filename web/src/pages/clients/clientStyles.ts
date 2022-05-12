import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  max-width: 900px;
  width: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .buttonActions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.25rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--text-regular);

    &:hover {
      filter: brightness(0.9);
    }
  }

  .updateButton {
    background: var(--blue-light);
  }

  .deleteButton {
    background: var(--text-error);
  }

  button + button {
    margin-left: 1.5rem;
  }

  @media (max-width: 380px) {
    max-width: 300px;
    margin-top: 2.5rem;

    .buttonActions {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 780px) {
    max-width: 600px;
    margin-top: 2.5rem;

    .buttonActions {
      margin-bottom: 2.5rem;
    }
  }
`;
