"use client";
import React from "react";
import ReactLogo from "../public/assets/reactjs.svg";
import HtmlLogo from "../public/assets/html.svg";
import File from "./File";

const OpenedFile = () => {
  return (
    <div className="bg-base h-14 flex items-center">
      <div className="text-sm flex items-center">
        <File image={ReactLogo} className="h-14">
          page.tsx
        </File>
        <File image={ReactLogo} className="h-14">
          Sidebar.tsx
        </File>
        <File image={ReactLogo} className="h-14">
          Home.tsx
        </File>
        <File image={HtmlLogo} className="h-14">
          page.html
        </File>
        <File image={ReactLogo} className="h-14">
          page.jsx
        </File>
      </div>
    </div>
  );
};

export default OpenedFile;
