import React from "react";
// import { StyledField } from "./InputField.styled";
import classes from "./InputField.module.css";
function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  maxLength,
}) {
  return (
    <div className={classes.inputWrapper}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputField;
