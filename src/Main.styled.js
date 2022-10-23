import styled from "styled-components";

const StyledMain = styled.main`
  @media (min-width: 1024px) {
    height: 100vh;
    display: flex;
    overflow: hidden;
    align-items: center;
  }
`;
const StyledForm = styled.form`
  padding: 9.1rem 0 4.5rem;
  width: 327px;
  margin: 0 auto;
  .wide-input {
    width: 100%;
  }
  .nested-fields {
    display: flex;
    justify-content: flex-start;
    .small-input {
      width: 72px;
      margin-right: 8px;
    }
    .medium-input {
      width: 164px;
    }
  }
  button:disabled {
    background-color: gray;
    border: 1px solid gray;
    pointer-events: none;
  }
  button {
    width: 100%;
    background: #21092f;
    border-radius: 8px;
    border: 1px solid #21092f;
    font-size: 18px;
    color: #fff;
    padding: 1.5rem 0;
    cursor: pointer;
  }
`;

export { StyledMain, StyledForm };
