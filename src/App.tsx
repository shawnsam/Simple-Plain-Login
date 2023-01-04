import React from "react";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/success",
      element: <SuccessPage />,
    },
  ]);
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;

