import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-(--bg-main) relative w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="w-[calc(100%-16rem)] flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-4 w-full">
          <Outlet />
        </div>
      </div>
     
    </div>
  );
};

export default Layout;


