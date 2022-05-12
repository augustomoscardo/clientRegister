import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 1.5rem;

    p {
      color: var(--text-error);
      font-size: 0.875rem;
      margin-bottom: 0;
      margin-left: 0.625rem;
    }
  }

  input {
    /* box-shadow: 2px 2px 2px 1px var(--text-fade); */

    width: 400px;

    background: var(--gray-light);
    padding: 0.625rem;
    border-radius: 0.5rem;
    color: var(--text-regular);
    border: none;

    margin-bottom: 0.325rem;

    @media (max-width: 380px) {
      width: 300px;
    }
  }

  input::placeholder {
    color: var(--text-fade);
  }

  input:focus {
    outline: none;
    border: 1px solid var(--blue-light);
  }

  input[type="date"] {
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-year-field {
      color: var(--text-regular);
    }

    ::-webkit-calendar-picker-indicator {
      display: none;
    }
  }

  button {
    background: var(--blue-light);
    color: var(--text-regular);
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: none;

    width: 400px;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      margin-bottom: 0;
    }

    @media (max-width: 380px) {
      width: 300px;
    }

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
