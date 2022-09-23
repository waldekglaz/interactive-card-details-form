import React from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
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
class App extends React.Component {
  state = {
    cvc: "000",
    cardNumber: "1234 5444 1234 1223",
    cardHolderName: "Jane Appleseed",
    expireMonth: "00",
    expireYear: "00",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
  };

  onNameChange = (e) => {
    this.setState({ cardHolderName: e.target.value });
  };
  onCradNumberChange = (e) => {
    this.setState({ cardNumber: e.target.value });
  };

  onMonthChange = (e) => {
    this.setState({ expireMonth: e.target.value });
  };
  onYearChange = (e) => {
    this.setState({ expireYear: e.target.value });
  };
  onCvcChange = (e) => {
    this.setState({ cvc: e.target.value });
  };
  onInputClick = () => {
    this.setState({ cardNumber: "" });
  };
  render() {
    return (
      <StyledMain>
        <Header
          cvc={this.state.cvc}
          name={this.state.cardHolderName}
          cardNumber={this.state.cardNumber}
          expMonth={this.state.expireMonth}
          expYear={this.state.expireYear}
        />
        <StyledForm onSubmit={this.onFormSubmit}>
          <InputField
            label="Cardholder name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={this.state.cardHolderName}
            onChange={this.onNameChange}
            className="wide-input"
          />

          <InputField
            label="Card Number"
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={this.state.cardNumber}
            onChange={this.onCradNumberChange}
            onFocus={this.onInputClick}
            className="wide-input"
          />

          <div className="nested-fields">
            <InputField
              label="EXP. DATE"
              type="number"
              placeholder="MM"
              value={this.state.expireMonth}
              onChange={this.onMonthChange}
              className="small-input"
            />
            <InputField
              label="(MM/YY)"
              type="number"
              placeholder="YY"
              value={this.state.expireYear}
              onChange={this.onYearChange}
              className="small-input"
            />
            <InputField
              label="cvc"
              type="number"
              placeholder="e.g. 123"
              value={this.state.cvc}
              onChange={this.onCvcChange}
              className="medium-input"
            />
          </div>
          <button type="submit">Confirm</button>
        </StyledForm>
      </StyledMain>
    );
  }
}

export default App;
