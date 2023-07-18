import React from "react";
import RegisterNav from "./components/RegisterNav";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid-layout1 py-8 container">
      {/* <RegisterNav /> */}
      {children}
    </div>
  );
};

export default RegisterLayout;
