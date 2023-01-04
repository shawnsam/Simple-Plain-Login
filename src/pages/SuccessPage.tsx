import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Successfully Logged in !</p>
      <button onClick={() => navigate("/")}> logout </button>
    </div>
  );
};
export default SuccessPage;

