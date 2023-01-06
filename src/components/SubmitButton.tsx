import React from "react";
import styled from "styled-components";
import { FormStatus } from "../types/form";

interface ISubmitButton {
  label: string;
  onClick: () => void;
  status: FormStatus;
}

const SubBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.color};
`;

const SubmitButton: React.FC<ISubmitButton> = ({ label, onClick, status }) => {
  const buttonBackgroundMap = {
    [FormStatus.SUCCESS]: "green",
    [FormStatus.PENDING]: "grey",
    [FormStatus.ERROR]: "red",
    [FormStatus.VALIDATING]: "yellow",
  };

  const onSubButClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onClick();
  };

  return (
    <SubBtn
      type="submit"
      id="loginBtn"
      data-testid="submit"
      onClick={onSubButClick}
      theme={{ color: buttonBackgroundMap[status] }}
    >
      {label}
    </SubBtn>
  );
};

export default SubmitButton;