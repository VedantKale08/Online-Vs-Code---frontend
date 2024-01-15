"use client";
import Image from "next/image";
import React, { useState } from "react";
import VsLogo from "../public/assets/file-type-vscode.svg";
import ReactLogo from "../public/assets/reactjs.svg";
import File from "./File";
import CreateFilePopup from "./CreateFilePopup";
import { useFile } from "@/context/fileContext";
import { FilePlus2 } from "lucide-react";

interface SidebarButtonType {
  children: React.ReactNode;
  onClick?: () => void;
}

const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { files } = useFile();

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
      <div className="bg-[#1C2025] text-sm py-1 px-4 flex items-center">
        <p className="flex-1">Your files</p>
        {files.length !== 0 && (
          <FilePlus2
            size={15}
            className="text-gray-300 cursor-pointer hover:opacity-80"
            onClick={() => setShowPopup(true)}
          />
        )}
      </div>
      {/* If no file is created*/}
      {files.length === 0 && (
        <div className="text-[12px] px-4 py-3 grid gap-3">
          <p>You have not yet created any file.</p>
          <SidebarButton onClick={() => setShowPopup(true)}>
            Create a file
          </SidebarButton>
          <p>You can open any file from your computer to online vs code.</p>
          <SidebarButton>Open a file</SidebarButton>
        </div>
      )}

      <div className="text-sm py-3">
        {files.map((file, index) => (
          <File key={index} id={file.id} ext={file.ext} image={ReactLogo}>
            {file.name}
          </File>
        ))}
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
