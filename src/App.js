import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { StyledMain, StyledForm } from "./Main.styled";

const App = () => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setexpireMonth] = useState("");
  const [expireYear, setexpireYear] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  // Validation
  const [isCardHolderNameInputValid, setIsCardHolderNameInputValid] =
    useState(false);
  const [isCardNumberInputValid, setIsCardNumberInputValid] = useState(false);

  const [isExpireMonthInputValid, setIsExpireMonthInputValid] = useState(false);
  const [isExpireYearInputValid, setIsExpireYearInputValid] = useState(false);
  const [isCvcInputValid, setIsCvcInputValid] = useState(false);

  const nameChangeHandler = (e) => {
    setCardHolderName(e.target.value);
    if (e.target.value.length > 3) {
      console.log("name validated");
      setIsCardHolderNameInputValid(true);
    }
  };

  const cardNumberChangeHandler = (e) => {
    setCardNumber(e.target.value);
    if (e.target.value.length === 16) {
      console.log("number validated");
      setIsCardNumberInputValid(true);
    }
  };

  const expireMonthChangeHandler = (e) => {
    setexpireMonth(e.target.value);
    if (e.target.value.length === 2) {
      console.log("month validated");
      setIsExpireMonthInputValid(true);
    }
  };
  const expireYearChangeHandler = (e) => {
    setexpireYear(e.target.value);
    if (e.target.value.length === 2) {
      console.log("year validated");
      setIsExpireYearInputValid(true);
    }
  };
  const cvcChangeHandler = (e) => {
    setCvc(e.target.value);
    if (e.target.value.length === 2) {
      console.log("cvc validated");
      setIsCvcInputValid(true);
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const formValidation = () => {
    if (
      isCardHolderNameInputValid &&
      isCardNumberInputValid &&
      isExpireMonthInputValid &&
      isExpireYearInputValid &&
      isCvcInputValid
    ) {
      console.log("formvalid");
      setIsFormValid(true);
    }
  };
  return (
    <StyledMain>
      <Header
        cvc={cvc}
        name={cardHolderName}
        cardNumber={cardNumber}
        expMonth={expireMonth}
        expYear={expireYear}
      />
      <StyledForm onChange={formValidation}>
        <InputField
          label="Cardholder name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={cardHolderName}
          onChange={nameChangeHandler}
          className="wide-input"
          maxLength="28"
        />

        <InputField
          label="Card Number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={cardNumberChangeHandler}
          className="wide-input"
          maxLength="16"
        />

        <div className="nested-fields">
          <InputField
            label="EXP. DATE"
            type="text"
            placeholder="MM"
            value={expireMonth}
            onChange={expireMonthChangeHandler}
            className="small-input"
            maxLength="2"
          />
          <InputField
            label="(MM/YY)"
            type="text"
            placeholder="YY"
            value={expireYear}
            onChange={expireYearChangeHandler}
            className="small-input"
            maxLength="2"
          />
          <InputField
            label="cvc"
            type="text"
            placeholder="e.g. 123"
            value={cvc}
            onChange={cvcChangeHandler}
            className="medium-input"
            maxLength="3"
          />
        </div>

        {!isFormValid && (
          <button disabled type="button">
            Confirm
          </button>
        )}
        {isFormValid && <button type="button">Confirm</button>}
      </StyledForm>
    </StyledMain>
  );
};

export default App;
