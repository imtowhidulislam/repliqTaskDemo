import React from "react";
import DashboardNavbar from "./components/common/Navbar/page";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid-layout container">
        <DashboardNavbar />
        {children}
    </div>
  );
};

export default DashboardLayout;
