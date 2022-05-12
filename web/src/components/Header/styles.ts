import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
`;

export const Content = styled.nav`
  max-width: 1120px;
  padding: 2rem;

  display: flex;
  align-items: center;

  h1 {
    margin-right: 5rem;
    color: var(--text-regular);
  }

  .navLinks {
    display: flex;
    align-items: center;
    gap: 4rem;

    a {
      color: var(--text-fade);
    }

    a:hover {
      font-weight: bold;
      color: var(--text-regular);
    }

    .active {
      color: var(--blue-light);
      font-weight: bold;
    }
  }
`;
