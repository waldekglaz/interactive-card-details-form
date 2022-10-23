import React from "react";
import doneIcon from "../img/icon-complete.svg";
import classes from "./ConfirmationMessage.module.css";

function ConfirmationMessage() {
  return (
    <div className={classes.container}>
      <img src={doneIcon} alt="icon" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
    </div>
  );
}

export default ConfirmationMessage;
