import React from "react";
import "./layout.css";

import { Outlet } from "react-router-dom";

// kontejner pro formatovani rozlozeni cele app

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
