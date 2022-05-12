import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  bottom: 0;
  margin: 2rem 0;
  /* position: fixed; */

  p {
    color: var(--text-fade);

    a:hover {
      font-weight: bold;
      color: var(--blue-light);
    }
  }

  @media (max-width: 380px) {
    margin-bottom: 2.5rem;

    a {
      font-weight: bold;
      color: var(--blue-light);
    }
  }
`;
