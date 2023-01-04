import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import TextField from "../components/TextField";
import { FormStatus } from "../types/form";
import { isValidLogin, isValidEmail } from "../utilities/helpers";

const LoginPageContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.PENDING);
  const navigate = useNavigate();

  const checkLogin = () => {
    console.log("logging in");
    if (!isValidLogin(email, password)) {
      setFormStatus(FormStatus.ERROR);
      return;
    }
    navigate("/success");
  };

  const onFormSubmit = () => {
    console.log("form submitted");

    setFormStatus(FormStatus.VALIDATING);
    if (!isValidEmail(email)) {
      setFormStatus(FormStatus.ERROR);
      return;
    }
    setTimeout(checkLogin, 500);
  };

  useEffect(() => {
    setFormStatus(FormStatus.PENDING);
  }, [email, password]);

  return (
    <LoginPageContainer
      onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit();
      }}
    >
      <TextField label={"Email:"} value={email} onChange={setEmail} />
      <TextField
        label={"Password:"}
        value={password}
        onChange={setPassword}
        isPassword
      />
      <SubmitButton
        label={"Submit"}
        status={formStatus}
        onClick={onFormSubmit}
      />
    </LoginPageContainer>
  );
};

export default LoginPage;

