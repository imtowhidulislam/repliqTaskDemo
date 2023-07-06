import React from "react";
import RegisterNav from "./components/RegisterNav";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid-layout container">
      <RegisterNav />
      {children}
    </div>
  );
};

export default RegisterLayout;
