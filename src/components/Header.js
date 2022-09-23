import React from "react";
import logo from "../img/card-logo.svg";
import styled from "styled-components";
import cardImg from "../img/bg-card-back.png";

const StyledHeader = styled.header`
  background-color: #21092f;
  color: #fff;
  padding: 3.2rem 1.6rem 5.1rem;
  .content-wrapper {
    max-width: 343px;
    margin: 0 auto;
    position: relative;
  }
  @media (min-width: 1024px) {
    height: 100%;
    width: 483px;
    .content-wrapper {
      height: 100%;
    }
  }
`;
const StyledCardBack = styled.div`
  height: 15.7rem;
  width: 28.6rem;
  border-radius: 0.6rem;
  margin-right: 0;
  margin-left: auto;
  background-image: url(${cardImg});
  background-size: cover;
  font-size: 9px;
  position: relative;
  div {
    position: absolute;
    top: 70px;
    right: 33px;
  }
  @media (min-width: 1024px) {
    width: 447px;
    height: 245px;
    top: 55%;
    left: 6vw;
    div {
      font-size: 14px;
      top: 45%;
      right: 13%;
    }
  }
  @media (min-width: 1440px) {
    top: 55%;
    left: 13vw;
  }
`;
const StyledCardFront = styled.div`
  position: absolute;
  top: 8.9rem;
  left: 0;
  height: 15.7rem;
  width: 28.6rem;
  border-radius: 0.6rem;
  padding: 1.76rem 1.9rem 1.96rem;
  background: rgb(0, 27, 36);
  background: linear-gradient(
    163deg,
    rgba(0, 32, 36, 1) 0%,
    rgba(9, 81, 121, 1) 0%,
    rgba(214, 0, 255, 1) 100%
  );
  filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.142481));
  img {
    width: 5.4rem;
    margin-bottom: 3.7rem;
  }
  .display-number {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.7rem;
  }
  .display-name {
    text-transform: uppercase;
  }
  .wrapper {
    position: absolute;
    bottom: 1.96rem;
    left: 1.9rem;
    right: 1.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 447px;
    height: 245px;
    top: 22%;
    left: 1vw;
    border-radius: 10px;
    padding: 28px 32px 26px;
    img {
      width: 8.4rem;
      margin-bottom: 3.7rem;
    }
    .display-number {
      font-size: 28px;
      letter-spacing: 3.4222px;
      text-align: left;
    }
    .display-name,
    .display-expire-date {
      font-size: 14px;
      letter-spacing: 2px;
    }
    .wrapper {
      padding: 0 12px;
    }
  }
  @media (min-width: 1440px) {
    left: 7vw;
  }
`;
const Header = ({ cvc, name, cardNumber, expMonth, expYear }) => {
  return (
    <StyledHeader>
      <div className="content-wrapper">
        <StyledCardBack>
          <div className="display-cvc">{cvc}</div>
        </StyledCardBack>
        <StyledCardFront>
          <img src={logo} className="logo" alt="logo" />
          <div className="display-number">{cardNumber}</div>
          <div className="wrapper">
            <div className="display-name">{name}</div>
            <div className="display-expire-date">
              {expMonth}/{expYear}
            </div>
          </div>
        </StyledCardFront>
      </div>
    </StyledHeader>
  );
};

export default Header;
