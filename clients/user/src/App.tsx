import AuthRoute from "hoc/authRoute";
import WelcomeScreen from "pages/welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route element={<AuthRoute />}></Route>
    </Routes>
  );
}

export default App;
