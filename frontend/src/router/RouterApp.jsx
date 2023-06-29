import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Getinto from "../views/Getinto";
import CreateTicket from "../views/CreateTicket";
import Cola from "../views/Cola";
import Desk from "../views/Desk";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/get-into"} />} />
      <Route path="/cola" element={<Cola />} />
      <Route path="/get-into" element={<Getinto />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/desk" element={<Desk />} />
    </Routes>
  );
};

export default RouterApp;
