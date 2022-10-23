import React from "react";
import Button from "./Button";
import doneIcon from "../img/icon-complete.svg";
import classes from "./ConfirmationMessage.module.css";

function ConfirmationMessage({ onClick }) {
  return (
    <div className={classes.container}>
      <img src={doneIcon} alt="icon" className={classes.icon} />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <Button text="Continue" onClick={onClick} />
    </div>
  );
}

export default ConfirmationMessage;
