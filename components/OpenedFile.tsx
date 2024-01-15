"use client";
import React from "react";
import ReactLogo from "../public/assets/reactjs.svg";
import HtmlLogo from "../public/assets/html.svg";
import File from "./File";
import { useFile } from "@/context/fileContext";

const OpenedFile = () => {
  const { files } = useFile();
  return (
    <div className="bg-base h-10 flex items-center">
      <div className="text-sm flex items-center">
        {files.map(
          (file, index) =>
            file.isOpen && (
              <File
                key={index}
                id={file.id}
                ext={file.ext}
                image={ReactLogo}
                className="text-[12px]"
                cancel={true}
              >
                {file.name}
              </File>
            )
        )}
      </div>
    </div>
  );
};

export default OpenedFile;
