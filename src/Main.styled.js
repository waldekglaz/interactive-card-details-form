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
  padding: 0 2rem;
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
`;

export { StyledMain, StyledForm };
