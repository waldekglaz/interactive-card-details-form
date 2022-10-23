import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { StyledMain, StyledForm } from "./Main.styled";

class App extends React.Component {
  state = {
    cvc: "",
    cardNumber: "",
    cardHolderName: "Waldea",
    expireMonth: "",
    expireYear: "",
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
            maxLength="28"
          />

          <InputField
            label="Card Number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={this.state.cardNumber}
            onChange={this.onCradNumberChange}
            onFocus={this.onInputClick}
            className="wide-input"
            maxLength="16"
          />

          <div className="nested-fields">
            <InputField
              label="EXP. DATE"
              type="text"
              placeholder="MM"
              value={this.state.expireMonth}
              onChange={this.onMonthChange}
              className="small-input"
              maxLength="2"
            />
            <InputField
              label="(MM/YY)"
              type="text"
              placeholder="YY"
              value={this.state.expireYear}
              onChange={this.onYearChange}
              className="small-input"
              maxLength="2"
            />
            <InputField
              label="cvc"
              type="text"
              placeholder="e.g. 123"
              value={this.state.cvc}
              onChange={this.onCvcChange}
              className="medium-input"
              maxLength="3"
            />
          </div>
          <button type="submit">Confirm</button>
        </StyledForm>
      </StyledMain>
    );
  }
}

export default App;
