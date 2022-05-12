import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  background: linear-gradient(to right, #171923 45%, transparent),
    url("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80")
      center / 100% no-repeat;

  @media (max-width: 380px) {
    background: var(--bg-body);
  }
`;

export const Content = styled.main`
  max-width: 500px;
  width: 100%;
  margin-left: 5rem;

  margin-top: 5rem;

  h1 {
    color: var(--text-regular);
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-fade);
    margin-bottom: 2rem;
  }

  @media (max-width: 380px) {
    max-width: 300px;

    margin: 0 auto;
    margin-top: 2.5rem;
    overflow: hidden;

    h1,
    p {
      text-align: center;
    }
  }
`;
