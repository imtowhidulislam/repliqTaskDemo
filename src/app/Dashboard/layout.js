import React from "react";
import DashboardNavbar from "./components/common/Navbar/page";
import Dropdown from "./components/common/Dropdown";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid-layout ">
      <>
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <div className="mt-30 block md:hidden pl-4 sm:pl-8">
          <Dropdown />
        </div>
      </>
      <div className="container ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
