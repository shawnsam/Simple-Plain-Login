import React from "react";
import styled from "styled-components";

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  isPassword?: boolean;
}

const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

const TextField: React.FC<ITextFieldProps> = ({
  label,
  value,
  onChange,
  isPassword,
}) => {
  const type = isPassword ? "password" : "text";
  return (
    <TextFieldContainer>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </TextFieldContainer>
  );
};

export default TextField;

