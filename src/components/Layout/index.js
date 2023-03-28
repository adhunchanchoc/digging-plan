import React from "react";
import "./layout.css";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
