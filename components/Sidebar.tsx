"use client";
import Image from "next/image";
import React, { useState } from "react";
import VsLogo from "../public/assets/file-type-vscode.svg";
import ReactLogo from "../public/assets/reactjs.svg";
import JSLogo from "../public/assets/js.svg";
import HtmlLogo from "../public/assets/html.svg";
import PyLogo from "../public/assets/python.svg";
import File from "./File";
import CreateFilePopup from "./CreateFilePopup";

interface SidebarButtonType {
  children: React.ReactNode;
  onClick?: () => void;
}

const Sidebar = () => {
  const [showPopup,setShowPopup] = useState(false);
  return (
    <div className="border-r border-gray-800 bg-base h-full text-gray-300">
      {/* header */}
      <div className="px-4 py-3 flex gap-4 items-center">
        <Image src={VsLogo} alt="" />
        <p className="text-xl text-white font-bold flex-1 ">
          Online <span className="text-[#1F9CF0]">VS code</span>
        </p>
      </div>

      {/* title */}
      <div className="bg-[#1C2025] text-sm py-1 px-4">
        <p>Your files</p>
      </div>

      {/* If no file is created*/}
      <div className="text-[12px] px-4 py-3 grid gap-3">
        <p>You have not yet created any file.</p>
        <SidebarButton onClick={() => setShowPopup(true)}>
          Create a file
        </SidebarButton>
        <p>You can open any file from your computer to online vs code.</p>
        <SidebarButton>Open a file</SidebarButton>
      </div>

      <div className="text-sm py-3">
        <File image={ReactLogo}>page.tsx</File>
        <File image={JSLogo}>page.js</File>
        <File image={PyLogo}>page.py</File>
        <File image={HtmlLogo}>page.html</File>
        <File image={ReactLogo}>page.jsx</File>
      </div>
      {showPopup && <CreateFilePopup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default Sidebar;

const SidebarButton = ({ children, onClick }: SidebarButtonType) => {
  return (
    <button
      className="bg-[#323845] w-full py-2 text-white flex justify-center items-center rounded-sm hover:bg-gray-600 transition duration-150"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
