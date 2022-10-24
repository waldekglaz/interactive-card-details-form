import React from "react";
import logo from "../img/card-logo.svg";
import classes from "./Header.module.css";

const Header = ({ cvc, name, cardNumber, expMonth, expYear }) => {
  return (
    <header className={classes.header}>
      <div className={classes.contentWrapper}>
        <div className={classes.cardBack}>
          <div className={classes.cvc}>{cvc}</div>
        </div>
        <div className={classes.cardFront}>
          <img src={logo} className="logo" alt="logo" />
          <div className={classes.displayNumber}>{cardNumber}</div>
          <div className={classes.wrapper}>
            <div className={classes.displayName}>{name}</div>
            <div className={classes.displayExpireDate}>
              {expMonth}/{expYear}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
