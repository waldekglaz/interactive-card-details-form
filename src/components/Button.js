import React from "react";
import classes from "./Button.module.css";

function Button({ text, onClick, disabled }) {
  return (
    <button className={classes.btn} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
