"use client";
import React from "react";
import ReactLogo from "../public/assets/reactjs.svg";
import HtmlLogo from "../public/assets/html.svg";
import File from "./File";

const OpenedFile = () => {
  return (
    <div className="bg-base h-10 flex items-center">
      <div className="text-sm flex items-center">
        <File image={ReactLogo} className="text-[12px]">
          page.tsx
        </File>
        <File image={ReactLogo} className="text-[12px]">
          Sidebar.tsx
        </File>
        <File image={ReactLogo} className="text-[12px]">
          Home.tsx
        </File>
        <File image={HtmlLogo} className="text-[12px]">
          page.html
        </File>
        <File image={ReactLogo} className="text-[12px]">
          page.jsx
        </File>
      </div>
    </div>
  );
};

export default OpenedFile;
