import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Container from "./components/Container";
import classes from "./App.module.css";
import ConfirmationMessage from "./components/ConfirmationMessage";
import Button from "./components/Button";

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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameChangeHandler = (e) => {
    setCardHolderName(e.target.value);

    if (e.target.value.length > 3) {
      console.log("");
      setIsCardHolderNameInputValid(true);
    }
  };

  const cardNumberChangeHandler = (e) => {
    setCardNumber(e.target.value);
    const value = e.target.value;
    if (e.target.value.length === 16 && !isNaN(+value)) {
      setIsCardNumberInputValid(true);
    }
  };

  const expireMonthChangeHandler = (e) => {
    setexpireMonth(e.target.value);
    const value = e.target.value;
    if (e.target.value.length === 2 && !isNaN(+value)) {
      setIsExpireMonthInputValid(true);
    }
  };
  const expireYearChangeHandler = (e) => {
    setexpireYear(e.target.value);
    const value = e.target.value;
    if (e.target.value.length === 2 && !isNaN(+value)) {
      setIsExpireYearInputValid(true);
    }
  };
  const cvcChangeHandler = (e) => {
    setCvc(e.target.value);
    const value = e.target.value;
    if (e.target.value.length === 2 && !isNaN(+value)) {
      setIsCvcInputValid(true);
    }
  };
  const formSubmitHandler = (e) => {
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
      setIsFormValid(true);
    }
  };

  const formSubmittion = () => {
    setFormSubmitted(true);
  };
  const formReset = () => {
    setCardHolderName("");
    setCardNumber("");
    setexpireMonth("");
    setexpireYear("");
    setCvc("");
    setIsCardHolderNameInputValid(false);
    setIsCardNumberInputValid(false);
    setIsExpireMonthInputValid(false);
    setIsExpireYearInputValid(false);
    setIsCvcInputValid(false);
    setIsFormValid(false);
    setFormSubmitted(false);
  };
  return (
    <main className={classes.main}>
      <Header
        cvc={cvc}
        name={cardHolderName}
        cardNumber={cardNumber}
        expMonth={expireMonth}
        expYear={expireYear}
      />
      <Container>
        {!formSubmitted && (
          <form
            className={classes.form}
            onChange={formValidation}
            onSubmit={formSubmitHandler}
          >
            <InputField
              label="Cardholder name"
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={cardHolderName}
              onChange={nameChangeHandler}
              className={classes.wideInput}
              maxLength="28"
            />

            <InputField
              label="Card Number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardNumber}
              onChange={cardNumberChangeHandler}
              className={classes.wideInput}
              maxLength="16"
            />

            <div className={classes.nestedFields}>
              <InputField
                label="EXP. DATE"
                type="text"
                placeholder="MM"
                value={expireMonth}
                onChange={expireMonthChangeHandler}
                className={classes.smallInput}
                maxLength="2"
              />
              <InputField
                label="(MM/YY)"
                type="text"
                placeholder="YY"
                value={expireYear}
                onChange={expireYearChangeHandler}
                className={classes.smallInput}
                maxLength="2"
              />
              <InputField
                label="cvc"
                type="text"
                placeholder="e.g. 123"
                value={cvc}
                onChange={cvcChangeHandler}
                className={classes.mediumInput}
                maxLength="3"
              />
            </div>

            {!isFormValid && <Button text="Confirm" disabled={true} />}
            {isFormValid && <Button onClick={formSubmittion} text="Confirm" />}
          </form>
        )}
        {formSubmitted && <ConfirmationMessage onClick={formReset} />}
      </Container>
    </main>
  );
};

export default App;
