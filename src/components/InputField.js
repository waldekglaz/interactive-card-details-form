import React from "react";
import styled from "styled-components";

const StyledField = styled.div`
  margin-bottom: 2rem;
  label {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #21092f;
    display: block;
    margin-bottom: 0.9rem;
  }
  input {
    border: 1px solid #dfdee0;
    border-radius: 8px;
    font-size: 18px;
    padding: 1rem 0 1rem 1rem;
  }
`;

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
