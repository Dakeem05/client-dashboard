import React from "react";
import { Outlet } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-30  bg-gray-500">Side Bar</div>
      <div className="flex flex-col w-full flex-1">
        <div className="h-10 bg-gray-500">Navigation Bar</div>
        <div className="flex flex-col gap-10 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
