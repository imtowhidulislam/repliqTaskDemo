import React from "react";
import RegisterNav from "./components/RegisterNav";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid-layout1 py-8 min-h-custom-h-form container">
      {/* <RegisterNav /> */}
      {children}
    </div>
  );
};

export default RegisterLayout;
