import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p id="successMsg">Successfully Logged in !</p>
      <button onClick={() => navigate("/")} id="logoutBtn" data-testid="logoutBtn"> logout </button>
    </div>
  );
};
export default SuccessPage;

