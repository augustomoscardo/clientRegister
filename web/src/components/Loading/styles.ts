import styled from "styled-components";

export const LoadingSpin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-bottom: 2px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;

  background: var(--blue-light);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
