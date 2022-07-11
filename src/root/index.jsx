import React from "react";
import { Application } from "../components/App/Application";
import { TopNav } from "../components/Navbar/TopNav";

export const Root = () => {
  return (
    <div>
      <TopNav />
      <Application />
    </div>
  );
};
