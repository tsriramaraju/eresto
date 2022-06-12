import AuthRoute from "hoc/authRoute";
import ListScreen from "pages/list";
import OTPScreen from "pages/otp";
import QueueScreen from "pages/queue";
import WelcomeScreen from "pages/welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/:table" element={<WelcomeScreen />} />
      <Route path="/otp" element={<OTPScreen />} />
      <Route path="/list" element={<ListScreen />} />
      <Route path="/queue" element={<QueueScreen />} />
      <Route element={<AuthRoute />}></Route>
    </Routes>
  );
}

export default App;
