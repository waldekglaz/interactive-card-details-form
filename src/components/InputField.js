import React from "react";
import { StyledField } from "./InputField.styled";
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
    <StyledField>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        maxLength={maxLength}
      />
    </StyledField>
  );
}

export default InputField;
