import AuthRoute from "hoc/authRoute";
import OTPScreen from "pages/otp";
import QueueScreen from "pages/queue";
import WelcomeScreen from "pages/welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/:table" element={<WelcomeScreen />} />
      <Route path="/otp" element={<OTPScreen />} />
      <Route path="/queue" element={<QueueScreen />} />
      <Route element={<AuthRoute />}></Route>
    </Routes>
  );
}

export default App;
