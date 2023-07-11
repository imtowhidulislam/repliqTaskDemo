import React from "react";
import DashboardNavbar from "./components/common/Navbar/page";
import Dropdown from "./components/common/Dropdown";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid-layout container">
      <>
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <div className="block md:hidden mt-30">
          <Dropdown />
        </div>
      </>
      {children}
    </div>
  );
};

export default DashboardLayout;
